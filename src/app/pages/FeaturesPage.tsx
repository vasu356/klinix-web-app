import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Brain, Plug, Lock, Globe, BarChart3, MessageSquare, Clock, CheckCircle2, Settings, Smartphone, FileText, Users, ArrowRight, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const featureGroups = [
  {
    tag: "AI & Automation",
    color: "bg-violet-50 border-violet-100 text-violet-700",
    iconColor: "bg-violet-100 text-violet-600",
    features: [
      { icon: Brain, title: "Drug-allergy conflict detection", desc: "AI cross-references medications and allergies on submission, surfacing conflicts before the patient arrives." },
      { icon: Zap, title: "Behavioral risk flagging", desc: "Detects anxiety markers, dental phobia indicators, and sedation notes — automatically routed to the right clinician." },
      { icon: CheckCircle2, title: "Incomplete form alerting", desc: "Missing required fields trigger an immediate re-prompt before the submission is accepted." },
      { icon: Clock, title: "Pre-visit timing engine", desc: "Automatically schedules intake link delivery based on appointment type and lead time." },
    ],
  },
  {
    tag: "PMS Integrations",
    color: "bg-teal-50 border-teal-100 text-teal-700",
    iconColor: "bg-teal-100 text-teal-600",
    features: [
      { icon: Plug, title: "Dentrix native sync", desc: "Direct patient record creation and update into Dentrix G7 and Ascend — no middleware required." },
      { icon: Database, title: "Open Dental connector", desc: "Full two-way sync with Open Dental's API, including appointment linking and clinical notes." },
      { icon: Settings, title: "Custom API & webhooks", desc: "For non-standard PMS or EHR stacks, use the REST API and event webhooks to build any integration." },
      { icon: Plug, title: "Eaglesoft and Curve", desc: "Pre-built connectors for Eaglesoft and Curve Hero with field-level mapping support." },
    ],
  },
  {
    tag: "Patient Experience",
    color: "bg-sky-50 border-sky-100 text-sky-700",
    iconColor: "bg-sky-100 text-sky-600",
    features: [
      { icon: Smartphone, title: "Mobile-first forms", desc: "Built for the patient's phone, with large tap targets, auto-advance, and thumb-friendly layouts." },
      { icon: Globe, title: "Multilingual support", desc: "Available in English, Spanish, Mandarin, Hindi, Portuguese, and 6 more. Language detected automatically." },
      { icon: FileText, title: "Adaptive question logic", desc: "Irrelevant sections are hidden based on prior answers. A child's form is different from an adult's." },
      { icon: MessageSquare, title: "Automated reminders", desc: "SMS and email nudges sent at configurable intervals to incomplete submissions." },
    ],
  },
  {
    tag: "Security & Compliance",
    color: "bg-amber-50 border-amber-100 text-amber-700",
    iconColor: "bg-amber-100 text-amber-600",
    features: [
      { icon: Lock, title: "AES-256 encryption", desc: "All data encrypted at rest and in transit using AES-256-GCM and TLS 1.3 throughout." },
      { icon: Users, title: "Role-based access control", desc: "Set specific permissions for front desk, hygienists, dentists, and admin staff independently." },
      { icon: BarChart3, title: "Audit log", desc: "Every access, export, and edit is timestamped and attributable to a specific user for compliance review." },
      { icon: CheckCircle2, title: "BAA and SOC 2 Type II", desc: "Business Associate Agreement provided on all plans. SOC 2 Type II certification available on request." },
    ],
  },
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">Platform features</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.05] mb-6">
              Every feature built around real dental workflows.
            </h1>
            <p className="text-xl text-foreground/65 leading-8 mb-10">
              Not a generic form tool. Not a simple survey. Klinix is purpose-built for the clinical, operational, and compliance needs of dental practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book-demo" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors shadow-sm">See it in action</Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                View pricing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature groups */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {featureGroups.map((group) => (
            <div key={group.tag}>
              <div className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-10 ${group.color}`}>{group.tag}</div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="rounded-2xl border border-border bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${group.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm">{f.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compare table */}
      <section className="py-20 px-6 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-4">Klinix vs paper forms</h2>
            <p className="text-foreground/65">The difference is immediate and measurable.</p>
          </div>
          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted px-6 py-4 text-sm font-semibold text-foreground">
              <div>Capability</div>
              <div className="text-center text-muted-foreground">Paper / Generic form</div>
              <div className="text-center text-primary">Klinix</div>
            </div>
            {[
              ["Drug-allergy conflict detection", "✗", "✓"],
              ["Automatic PMS sync", "✗", "✓"],
              ["HIPAA-compliant storage", "Partial", "✓"],
              ["Mobile-first patient experience", "✗", "✓"],
              ["Real-time AI risk flags", "✗", "✓"],
              ["Multilingual forms", "✗", "✓"],
              ["Returning patient pre-fill", "✗", "✓"],
              ["Completion rate > 90%", "30–50%", "92%+"],
            ].map(([cap, paper, klinix]) => (
              <div key={cap} className="grid grid-cols-3 border-t border-border px-6 py-4 text-sm">
                <div className="text-foreground/80 font-medium">{cap}</div>
                <div className="text-center text-muted-foreground">{paper}</div>
                <div className={`text-center font-semibold ${klinix === "✓" ? "text-primary" : "text-foreground"}`}>{klinix}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Ready to replace paper intake?</h2>
          <p className="text-slate-300 mb-8 text-lg">See every feature live in a 15-minute demo tailored to your practice.</p>
          <Link to="/book-demo" className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">Book a demo</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
