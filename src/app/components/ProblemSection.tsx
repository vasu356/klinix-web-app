import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 42, suffix: " min", label: "avg patient intake time before Klinix" },
  { number: 31, suffix: "%", label: "forms with missing or illegible info" },
  { number: 18000, suffix: "", label: "front-desk hours wasted per year" },
];

export function ProblemSection() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1200;
        const start = performance.now();

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          setCounts(
            stats.map((stat) => Math.round(stat.number * progress))
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Operations impact
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              The numbers clinics use to justify automation.
            </h2>
            <p className="max-w-2xl text-lg text-foreground/70 leading-8">
              Klinix turns intake from a liability into a workflow advantage — less paperwork, fewer errors, and a faster patient experience from first click to chair-side.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div>
                  <div className="text-5xl font-semibold tracking-tight text-foreground mb-4 break-words">
                    {index === 2 ? `$${counts[index].toLocaleString()}` : counts[index]}{stat.suffix}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

