import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { sitePageByPath } from "../content/sitePages";
import { Button } from "../components/Button";

export function ContentPage() {
  const { pathname } = useLocation();
  const page = sitePageByPath.get(pathname);

  if (!page) return null;

  const keywords = page.path.split("/").filter(Boolean).join(" • ").toUpperCase() || "KLINIX";

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 px-6 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-12 bottom-16 h-64 w-64 rounded-full bg-slate-300/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl space-y-8">
        <section className="rounded-[2rem] border border-border bg-white/95 p-8 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.4)] sm:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Klinix Workspace
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">{keywords}</p>
          </div>

          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{page.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-foreground/75">{page.description}</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-border bg-white p-7 shadow-sm">
            <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground">What You Get</h2>
            <div className="space-y-4">
              {page.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-border bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground/80">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Implementation Path</h3>
              <ol className="space-y-3 text-sm text-foreground/80">
                <li className="rounded-xl border border-border bg-slate-50 p-3">1. Discovery call to align your clinic goals and workflow.</li>
                <li className="rounded-xl border border-border bg-slate-50 p-3">2. Configuration tailored to your PMS and front-desk process.</li>
                <li className="rounded-xl border border-border bg-slate-50 p-3">3. Team onboarding, launch support, and optimization review.</li>
              </ol>
            </div>

            <div className="rounded-[1.75rem] border border-primary/30 bg-primary/10 p-6">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Shield className="h-4 w-4" />
                Compliance & Trust
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">
                Built for dental clinics that need HIPAA-ready workflows, dependable onboarding, and clear operational value.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border bg-slate-950 p-7 text-white sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Next Step</p>
              <p className="text-2xl font-semibold tracking-tight">Move forward with Klinix confidently.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/book-demo">
                <Button variant="primary" className="px-7 py-3">
                  Book a demo
                </Button>
              </Link>
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10">
                Back to homepage <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
