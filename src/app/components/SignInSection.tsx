import { Link } from "react-router-dom";
import { Button } from "./Button";

export function SignInSection() {
  return (
    <section id="signin" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Clinic access</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">Secure sign-in for your front desk and clinical team.</h2>
          <p className="max-w-2xl text-lg leading-8 text-foreground/70 mb-8">
            Sign up once and let your team access encrypted intake workflows, alerts, and appointment-ready patient summaries.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/signup">
              <Button variant="primary">Create account</Button>
            </Link>
            <Link to="/signin">
              <Button variant="secondary">Practice login</Button>
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-white p-8 shadow-sm">
          <div className="mb-6 rounded-3xl bg-slate-950 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-4">Secure clinic snapshot</p>
            <div className="text-2xl font-semibold">24 patients</div>
            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between rounded-3xl bg-slate-800 px-4 py-3 text-sm">
                <span>Ready for review</span>
                <span className="font-semibold text-primary">16</span>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-slate-800 px-4 py-3 text-sm">
                <span>Alerts</span>
                <span className="font-semibold text-amber-300">3</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-sm text-foreground/70">
            <div className="rounded-3xl border border-border bg-slate-50 p-4">
              <p className="font-semibold text-foreground">Encrypted workflow</p>
              <p>Clinic records are stored securely and only accessible after sign-in.</p>
            </div>
            <div className="rounded-3xl border border-border bg-slate-50 p-4">
              <p className="font-semibold text-foreground">Team permissions</p>
              <p>Practice admins control which staff members can access intake data.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
