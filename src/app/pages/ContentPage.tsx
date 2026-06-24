import { useLocation, Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { sitePageByPath } from "../content/sitePages";

export function ContentPage() {
  const { pathname } = useLocation();
  const page = sitePageByPath.get(pathname);
  if (!page) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="rounded-3xl border border-border bg-white p-10 shadow-sm">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">Klinix</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-5">{page.title}</h1>
            <p className="text-xl text-foreground/65 leading-8 max-w-3xl">{page.description}</p>
          </div>

          {/* Highlights + path */}
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8">
            <div className="rounded-3xl border border-border bg-white p-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">What's covered</h2>
              <div className="space-y-4">
                {page.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 rounded-2xl border border-border bg-slate-50/50 p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/75 leading-relaxed">{h}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl border border-border bg-white p-7">
                <h3 className="font-semibold text-foreground mb-4 text-sm">Getting started</h3>
                <ol className="space-y-3">
                  {["Discovery call to understand your needs", "Configuration tailored to your clinic workflow", "Team training and go-live support"].map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/65">
                      <span className="font-bold text-primary shrink-0">{i + 1}.</span>{s}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-3"><Shield className="w-4 h-4" />Compliance & trust</div>
                <p className="text-sm text-foreground/65 leading-relaxed">HIPAA-ready workflows, BAA on all plans, SOC 2 Type II certified. Built for dental practices.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl bg-slate-950 p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Next step</p>
              <p className="text-2xl font-semibold tracking-tight">Ready to move forward?</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link to="/book-demo" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">Book a demo</Link>
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Homepage <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
