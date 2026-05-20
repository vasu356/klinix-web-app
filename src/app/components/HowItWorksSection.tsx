import { Calendar, Shield, Database } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Patient receives a secure intake link",
      description: "Automated messaging sends the exact form before arrival.",
      icon: Calendar,
    },
    {
      number: "2",
      title: "AI validates clinical details instantly",
      description: "Allergy, medication, and risk checks happen as they type.",
      icon: Shield,
    },
    {
      number: "3",
      title: "Clean, structured data appears in your PMS",
      description: "Your team reviews intake in one view, not multiple tabs.",
      icon: Database,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Workflow</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            How Klinix turns intake into a confident handoff.
          </h2>
        </div>
        <div className="relative grid gap-10 md:grid-cols-3">
          <div className="absolute inset-x-1/2 top-1/2 hidden h-[2px] w-[calc(100%-3rem)] -translate-x-1/2 bg-slate-200 md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative rounded-[2rem] border border-border bg-slate-50 p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary font-semibold text-lg">
                    {step.number}
                  </div>
                  <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Fast, secure, and audit-ready.
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 right-[-24px] hidden h-1 w-12 bg-primary md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
