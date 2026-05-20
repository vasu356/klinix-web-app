import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { signIn, getSession } from "../utils/auth";

export function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (session) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      await signIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="pt-28 px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1fr_380px] items-start">
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Secure clinic access</p>
              <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-6">Sign in to your Klinix dashboard</h1>
              <p className="text-lg leading-8 text-foreground/70 max-w-2xl">
                Access encrypted patient intake summaries, review flagged medical data, and manage your practice workflow from one secure portal.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Practice login</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <label className="block text-sm font-medium text-foreground">
                  Clinic email address
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
                    placeholder="••••••••"
                    className="mt-3 w-full rounded-3xl border border-border bg-slate-50 px-4 py-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                {error && <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}
                <Button type="submit" className="w-full py-4" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </div>

            <div className="rounded-[2rem] border border-border bg-slate-50 p-8 text-sm text-foreground/70">
              <p className="font-semibold text-foreground mb-3">Need an account?</p>
              <p className="leading-relaxed">Create your clinic account to get started with secure intake and automated practice workflows.</p>
              <Link to="/signup" className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline">
                Create account
              </Link>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-border bg-white p-10 shadow-sm">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-2">Why this sign in is secure</p>
              <p className="text-foreground/70 leading-relaxed">Klinix protects clinic access with encrypted browser storage and strong password validation before you’re allowed into the dashboard.</p>
            </div>
            <div className="space-y-5 text-sm text-foreground/70 leading-7">
              <div>
                <p className="font-semibold text-foreground">Encrypted entry</p>
                <p>Credentials are validated against locally encrypted clinic records.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Practice control</p>
                <p>Only registered clinic users can sign in to access practice intake data.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Secure sessions</p>
                <p>Dashboard sessions are managed in browser storage and cleared on sign out.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
