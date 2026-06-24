import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { MessageCircle, ClipboardCheck, Zap, Database, CheckCircle2, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Intake link sent automatically",
    description: "The moment an appointment is confirmed in your PMS, Klinix sends the patient a personalized intake link via SMS and email. No front-desk action required. The link is secure, patient-specific, and expires after use.",
    detail: "Sent 48 hours before the appointment. Configurable timing per appointment type.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Patient completes the form on any device",
    description: "The mobile-first form guides patients through health history, medications, allergies, insurance, and consent — in their preferred language. Adaptive logic skips questions that don't apply. Average completion time: 6 minutes.",
    detail: "92% of patients complete before arrival. Works on phone, tablet, or desktop.",
  },
  {
    number: "03",
    icon: Zap,
    title: "AI reviews every submission instantly",
    description: "As soon as the form is submitted, Klinix AI checks for drug-allergy conflicts, missing critical fields, anxiety markers, and other clinical flags. High-risk findings are surfaced immediately with recommended actions.",
    detail: "Zero manual review needed for clean submissions. Flags go directly to the right team member.",
  },
  {
    number: "04",
    icon: Database,
    title: "Clean data appears in your PMS",
    description: "Validated, structured patient data syncs to Dentrix, Eaglesoft, Open Dental, or your PMS via direct integration. New patients are created. Returning patients are updated. Nothing enters the system incomplete.",
    detail: "Supports bidirectional sync. Data is mapped to your exact PMS field structure.",
  },
];

const timeline = [
  { time: "T-48h", label: "Intake link sent to patient" },
  { time: "T-24h", label: "Reminder sent if not complete" },
  { time: "T-0h", label: "AI review complete, PMS updated" },
  { time: "Visit", label: "Front desk sees fully loaded profile" },
];

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">Workflow</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] mb-6">
              From scheduled appointment to chair-side-ready in four steps.
            </h1>
            <p className="text-xl text-foreground/65 leading-8 mb-8">
              Klinix runs automatically in the background. Your team doesn't manually chase patients or re-enter data — it's already there when they need it.
            </p>
            <a href="#steps" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              See each step <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Timeline card */}
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Timeline per appointment</p>
            <div className="relative">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-border" />
              <div className="space-y-6">
                {timeline.map((t) => (
                  <div key={t.time} className="flex items-center gap-5">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest">{t.time}</p>
                      <p className="text-sm font-medium text-foreground">{t.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="py-20 px-6 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto space-y-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const flip = i % 2 !== 0;
            return (
              <div key={step.number} className={`grid lg:grid-cols-2 gap-14 items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-primary/15 leading-none">{step.number}</span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4">{step.title}</h2>
                  <p className="text-lg text-foreground/65 leading-8 mb-6">{step.description}</p>
                  <div className="rounded-xl bg-primary/8 border border-primary/15 px-5 py-3">
                    <p className="text-sm font-medium text-primary">{step.detail}</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-border bg-slate-50 p-10 flex items-center justify-center min-h-56">
                  <Icon className="w-24 h-24 text-primary/15" strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Outcome stats */}
      <section className="py-20 px-6 bg-slate-50 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4">What clinics see after switching</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "80%", label: "Reduction in paper intake time" },
              { value: "6 min", label: "Average patient form completion" },
              { value: "< 5 days", label: "Full onboarding time" },
              { value: "Zero", label: "Re-entry errors reported" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-white p-7 text-center shadow-sm">
                <div className="text-4xl font-semibold text-foreground mb-2">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">See it live in your clinic context</h2>
          <p className="text-slate-300 mb-8 text-lg">Book a 15-minute demo and watch the full workflow on your PMS.</p>
          <Link to="/book-demo" className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">Book a demo</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
