import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { getSession, signOut } from "../utils/auth";

type SessionData = {
  email: string;
  practiceName: string;
  signedInAt: string;
};

export function DashboardPage() {
  const navigate = useNavigate();
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    const activeSession = getSession();
    if (!activeSession) {
      navigate("/signin");
      return;
    }
    setSession(activeSession);
  }, [navigate]);

  const handleSignOut = () => {
    signOut();
    navigate("/signin");
  };

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="pt-28 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Clinic dashboard</p>
                <h1 className="text-4xl font-semibold text-foreground tracking-tight">Welcome back, {session.practiceName}</h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70">
                  You are signed in as {session.email}. Review secure intake status, patient alerts, and practice workflows from one place.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary" onClick={() => navigate("/")}>Visit homepage</Button>
                <Button variant="primary" onClick={handleSignOut}>Sign out</Button>
              </div>
            </div>
          </div>
          <div className="grid gap-6 mt-10 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-border bg-slate-50 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4">Current intake</p>
              <p className="text-3xl font-semibold text-foreground mb-2">24</p>
              <p className="text-sm text-foreground/70">Patients with pending or completed intake today</p>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-slate-50 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4">Alerts</p>
              <p className="text-3xl font-semibold text-foreground mb-2">3</p>
              <p className="text-sm text-foreground/70">Medical flags requiring review before appointment time</p>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-slate-50 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4">Security</p>
              <p className="text-3xl font-semibold text-foreground mb-2">Encrypted</p>
              <p className="text-sm text-foreground/70">Your clinic data is stored in encrypted form and protected by your sign-in credentials.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">Practice status</h2>
              <ul className="space-y-4 text-foreground/70">
                <li>• Intake forms ready for review</li>
                <li>• High-priority allergies detected</li>
                <li>• Secure session active</li>
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-border bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">Next steps</h2>
              <ul className="space-y-4 text-foreground/70">
                <li>• Review new patient intake records</li>
                <li>• Confirm flagged medications and allergies</li>
                <li>• Export secure intake data to your PMS</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-[1.75rem] border border-border bg-slate-50 p-8 shadow-sm text-foreground/70">
            <p className="font-semibold text-foreground mb-3">Secure storage note</p>
            <p>For this demo, the clinic account data is encrypted locally in the browser using AES-GCM and stored in secure browser storage. In a production system, an encrypted backend or managed auth service should be used for end-to-end protected clinic access.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
