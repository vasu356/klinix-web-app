import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { signUp } from "../utils/auth";

export function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [practiceName, setPracticeName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email || !practiceName || !password || !confirmPassword) {
      setError("Please complete every field.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await signUp(email, password, practiceName);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="pt-28 px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">New practice signup</p>
              <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-6">Create your Klinix clinic account.</h1>
              <p className="text-lg leading-8 text-foreground/70 max-w-2xl">
                Securely register your practice, create your clinic admin account, and start using encrypted patient intake immediately.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Secure sign up</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">All data is encrypted in the browser, then stored securely for clinic access.</p>
                </div>
                <div className="rounded-3xl border border-border bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Practice ready</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">Create the account that front desk and admin staff use to manage intake workflow.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
              <div className="mb-6">
                <h2 className="text-3xl font-semibold text-foreground mb-2">Register your clinic</h2>
                <p className="text-sm text-foreground/70">Use a real clinic email and a strong password to protect your practice data.</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-foreground">
                  Clinic name
                  <input
                    value={practiceName}
                    onChange={(event) => setPracticeName(event.target.value)}
                    placeholder="Sunrise Dental Practice"
                    className="mt-3 w-full rounded-3xl border border-border bg-slate-50 px-4 py-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Work email address
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="admin@clinic.com"
                    className="mt-3 w-full rounded-3xl border border-border bg-slate-50 px-4 py-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Create a secure password"
                    className="mt-3 w-full rounded-3xl border border-border bg-slate-50 px-4 py-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="block text-sm font-medium text-foreground">
                  Confirm password
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Re-enter password"
                    className="mt-3 w-full rounded-3xl border border-border bg-slate-50 px-4 py-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                {error && <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
                <Button type="submit" className="w-full py-4" disabled={loading}>
                  {loading ? "Creating account..." : "Create account"}
                </Button>
              </form>
            </div>
            <div className="rounded-[2rem] border border-border bg-slate-50 p-8 text-sm text-foreground/70">
              <p className="font-semibold text-foreground mb-3">Already have an account?</p>
              <p className="leading-relaxed">Sign in to your clinic dashboard to review patient intake, flags, and reporting.</p>
              <Link to="/signin" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">
                Go to sign in
              </Link>
            </div>
          </section>
          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4">Secure by design</p>
              <ul className="space-y-4 text-foreground/70 text-sm leading-7">
                <li>
                  <span className="font-semibold text-foreground">Encrypted locally</span> before storage, using browser-based cryptography.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Password protected</span> sign-in data means your clinic controls access.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Practice-ready workflow</span> built for dental operations and admin visibility.
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-border bg-slate-50 p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4">Why Klinix?</p>
              <div className="space-y-4 text-foreground/70 text-sm leading-7">
                <p>Faster intake, fewer errors, and encrypted clinic data built for your front desk and admin teams.</p>
                <p>Sign up once and access everything from intake forms to patient alerts in one secure portal.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
