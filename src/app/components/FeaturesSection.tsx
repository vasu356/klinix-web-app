import { Brain, Plug, Lock, Globe } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI medical review",
      description: "Automated patient screening captures allergies, interactions, and behavioral indicators before arrival.",
    },
    {
      icon: Plug,
      title: "Seamless PMS sync",
      description: "One-way and two-way integrations with Dentrix, Eaglesoft, Open Dental, Curve, and custom APIs.",
    },
    {
      icon: Lock,
      title: "Audit-grade security",
      description: "Encryption, access controls, and compliance workflows built for dental teams.",
    },
    {
      icon: Globe,
      title: "Patient-friendly intake",
      description: "Multilingual forms and adaptive workflows that reduce drop-off and confusion.",
    },
  ];

  return (
    <section id="product" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Platform</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Everything a modern dental practice needs in one intake platform.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="rounded-[2rem] border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
