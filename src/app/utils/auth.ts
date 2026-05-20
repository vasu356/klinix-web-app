const STORAGE_USER_KEY = "klinix_users";
const STORAGE_SESSION_KEY = "klinix_session";

type StoredUser = {
  email: string;
  practiceName: string;
  createdAt: string;
  salt: string;
  iv: string;
  ciphertext: string;
};

type SessionData = {
  email: string;
  practiceName: string;
  signedInAt: string;
};

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

function bufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let str = "";
  for (const byte of bytes) {
    str += String.fromCharCode(byte);
  }
  return btoa(str);
}

function base64ToBuffer(base64: string) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function getStoredUsers(): Record<string, StoredUser> {
  if (typeof localStorage === "undefined") return {};
  const raw = localStorage.getItem(STORAGE_USER_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, StoredUser>;
  } catch {
    return {};
  }
}

function saveStoredUsers(users: Record<string, StoredUser>) {
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(users));
}

function saveSession(session: SessionData) {
  localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(STORAGE_SESSION_KEY);
}

export async function deriveKey(password: string, salt: Uint8Array) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations: 200_000,
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function encryptUserData(password: string, data: object) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const encoded = textEncoder.encode(JSON.stringify(data));
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoded,
  );

  return {
    salt: bufferToBase64(salt.buffer),
    iv: bufferToBase64(iv.buffer),
    ciphertext: bufferToBase64(ciphertext),
  };
}

export async function decryptUserData(password: string, salt: string, iv: string, ciphertext: string) {
  const saltBuffer = base64ToBuffer(salt);
  const ivBuffer = base64ToBuffer(iv);
  const ciphertextBuffer = base64ToBuffer(ciphertext);
  const key = await deriveKey(password, saltBuffer);
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: ivBuffer },
    key,
    ciphertextBuffer,
  );

  return JSON.parse(textDecoder.decode(decrypted));
}

export async function signUp(email: string, password: string, practiceName: string) {
  const users = getStoredUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (users[normalizedEmail]) {
    throw new Error("This email is already registered. Please sign in.");
  }

  const data = {
    email: normalizedEmail,
    practiceName,
    createdAt: new Date().toISOString(),
  };
  const encrypted = await encryptUserData(password, data);
  users[normalizedEmail] = {
    email: normalizedEmail,
    practiceName,
    createdAt: data.createdAt,
    salt: encrypted.salt,
    iv: encrypted.iv,
    ciphertext: encrypted.ciphertext,
  };

  saveStoredUsers(users);
  saveSession({ email: normalizedEmail, practiceName, signedInAt: new Date().toISOString() });

  return data;
}

export async function signIn(email: string, password: string) {
  const users = getStoredUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const stored = users[normalizedEmail];

  if (!stored) {
    throw new Error("No account found with that email.");
  }

  try {
    const user = await decryptUserData(password, stored.salt, stored.iv, stored.ciphertext);
    saveSession({ email: user.email, practiceName: user.practiceName, signedInAt: new Date().toISOString() });
    return user;
  } catch {
    throw new Error("Invalid email or password.");
  }
}

export function getSession() {
  if (typeof localStorage === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionData;
  } catch {
    return null;
  }
}

export function signOut() {
  clearSession();
}
