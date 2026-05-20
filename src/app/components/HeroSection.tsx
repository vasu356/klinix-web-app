import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const logos = ["DentalCorp", "Bright Smiles", "Apex Dental", "ProDent", "SmileWorks"];

  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#f4f8fb]/80 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-[minmax(38%,560px)_1fr] gap-16 items-center">
          <div className="space-y-8">
            <p className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              AI intake for dental groups
            </p>
            <h1 className="tracking-tight text-5xl md:text-6xl leading-[1.02] font-semibold text-foreground">
              Turn patient intake into your clinic's strongest first impression.
            </h1>
            <p className="text-xl text-foreground/70 max-w-xl leading-8">
              Klinix automates intake forms, flags clinical risks, and syncs every patient profile with your PMS so your front desk operates with clarity, speed, and confidence.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/book-demo">
                <Button variant="primary">Book a demo</Button>
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                See how it works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pt-8">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Trusted by leading dental practices</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-sm font-medium text-foreground/75">
                {logos.map((logo, index) => (
                  <div key={index} className="rounded-2xl bg-white/90 px-3 py-4 shadow-sm border border-border text-center">
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-white to-slate-200/70 blur-2xl" />
            <div className="relative rounded-[2.5rem] border border-border bg-white p-5 sm:p-7 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.5)]">
              <div className="rounded-[2rem] border border-border/80 bg-gradient-to-b from-slate-50 to-white p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Patient intake command center</p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Sync active
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Today</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/10 p-3">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-300">Check-ins</p>
                        <p className="mt-2 text-3xl font-semibold">24</p>
                      </div>
                      <div className="rounded-xl bg-white/10 p-3">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-300">Complete</p>
                        <p className="mt-2 text-3xl font-semibold">92%</p>
                      </div>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-2 w-[92%] rounded-full bg-primary" />
                    </div>
                    <p className="mt-2 text-xs text-slate-300">Forms submitted before arrival</p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-primary font-semibold mb-1">AI flag</p>
                      <p className="text-sm text-foreground leading-relaxed">Drug allergy and anxiety marker detected. Team alerted pre-visit.</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-white p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-2">Connected systems</p>
                      <p className="text-sm font-semibold text-foreground">Dentrix · Open Dental · Eaglesoft</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-white p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground mb-2">Security posture</p>
                      <p className="text-sm font-semibold text-foreground">HIPAA compliant · SOC 2 Type II</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
