import { Button } from "./Button";
import { Link } from "react-router-dom";

export function FinalCTASection() {
  return (
    <section id="final-cta" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto rounded-[2.5rem] border border-white/10 bg-white/5 p-12 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.6)]">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90 font-semibold mb-3">Ready to launch</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Bring intake efficiency, accuracy, and patient comfort to every visit.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-200">
              Book a 15-minute walkthrough to see Klinix tailor-made for your clinic workflow and PMS.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link to="/book-demo" className="w-full">
              <Button variant="primary" className="w-full text-lg px-8 py-4">
                Book a demo
              </Button>
            </Link>
            <Link to="/talk-to-sales" className="w-full">
              <Button variant="secondary" className="w-full px-8 py-4 text-foreground border-white/20">
                Talk to sales
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 text-sm text-slate-400">
          <div className="rounded-3xl bg-slate-900/80 p-4 text-center">
            <div className="font-semibold text-white">15 min</div>
            <div>Average demo length</div>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-4 text-center">
            <div className="font-semibold text-white">Built for dental</div>
            <div>Designed around clinic workflows.</div>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-4 text-center">
            <div className="font-semibold text-white">No hidden fees</div>
            <div>Transparent pricing and support.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
