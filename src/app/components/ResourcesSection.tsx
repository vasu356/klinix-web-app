import { Link } from "react-router-dom";

export function ResourcesSection() {
  const resources = [
    {
      title: "Integration guides",
      description: "Launch Klinix with Dentrix, Eaglesoft, Open Dental, Curve, and API-based systems in under a week.",
      href: "/resources/integration-guides",
    },
    {
      title: "Compliance + security",
      description: "Clear documentation for HIPAA, SOC 2, BAAs, and secure patient data workflows.",
      href: "/resources/compliance-security",
    },
    {
      title: "Success stories",
      description: "See how dental practices reclaimed time, reduced no-shows, and improved patient experience.",
      href: "/resources/success-stories",
    },
  ];

  return (
    <section id="resources" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Insights</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
              Resources that help you launch with confidence.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-foreground/70">
              From integration checklists to compliance playbooks and clinic stories, these resources make implementation fast and easy.
            </p>
          </div>
          <div className="grid gap-6">
            {resources.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="group block rounded-[2rem] border border-border bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">{item.title}</div>
                <p className="text-sm leading-relaxed text-foreground/75">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                  Learn more
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
