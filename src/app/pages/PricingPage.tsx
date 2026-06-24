import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const tiers = [
  {
    name: "Solo",
    price: "$149",
    period: "/mo",
    tag: "Single chair practices",
    description: "Everything a solo practitioner needs to automate intake and reduce front-desk burden from day one.",
    features: [
      "Unlimited patient intake forms",
      "AI medical history review",
      "1 PMS integration (Dentrix, Open Dental, Eaglesoft)",
      "Automated SMS + email intake links",
      "HIPAA compliant — BAA included",
      "Mobile-first patient experience",
      "Email support (48h response)",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Practice",
    price: "$349",
    period: "/mo",
    tag: "Most popular",
    description: "For growing practices with 2–5 operatories that need deeper integrations, analytics, and priority support.",
    features: [
      "Everything in Solo",
      "Multiple PMS integrations",
      "Custom form templates by appointment type",
      "Advanced analytics dashboard",
      "Team role-based access control",
      "Priority support (4h response)",
      "Onboarding training session included",
      "Multilingual forms",
    ],
    cta: "Start free trial",
    href: "/signup",
    highlight: true,
  },
  {
    name: "Multi-location",
    price: "Custom",
    period: "",
    tag: "Clinic groups",
    description: "Enterprise-grade for groups managing 3+ locations with custom workflows, SLAs, and dedicated support.",
    features: [
      "Everything in Practice",
      "Dedicated account manager",
      "Custom API and webhook integrations",
      "SLA-backed response guarantees",
      "Volume-based pricing",
      "White-label patient-facing forms",
      "Quarterly business review",
    ],
    cta: "Talk to sales",
    href: "/talk-to-sales",
    highlight: false,
  },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes — all Solo and Practice plans include a 30-day free trial. No credit card required at signup. You'll see intake improvements within the first week." },
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade at any time from your account settings. Changes take effect at the next billing cycle." },
  { q: "Does pricing change based on patient volume?", a: "No. All plans are flat monthly fees — no per-patient fees, no per-form charges. Unlimited intake forms on every plan." },
  { q: "What's included in onboarding?", a: "Every new account gets a guided setup session, PMS integration support, and form configuration assistance. Practice and Multi-location plans include a dedicated training session with your team." },
  { q: "How do I get a BAA?", a: "A Business Associate Agreement is automatically included on all plans. You'll receive it via email when you activate your account." },
  { q: "What if my PMS isn't listed?", a: "Contact us before signing up. We support most major PMS platforms and may already have your system available, or can scope a custom integration." },
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center border-b border-border bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">Pricing</span>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-5 leading-[1.05]">Simple pricing.<br />No surprises.</h1>
          <p className="text-xl text-foreground/65 leading-8">Flat monthly fees. No per-patient charges. No hidden fees. Cancel any time.</p>
          <p className="mt-4 text-sm text-muted-foreground">Free 30-day trial on all plans · No credit card required</p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-3xl border p-8 ${tier.highlight ? "border-primary shadow-xl shadow-primary/10 bg-white" : "border-border bg-white"}`}>
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">Most popular</span>
                </div>
              )}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{tier.tag}</span>
                <h2 className="text-2xl font-semibold text-foreground mt-1 mb-1">{tier.name}</h2>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl font-bold text-foreground">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground text-base">{tier.period}</span>}
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">{tier.description}</p>
              </div>
              <Link to={tier.href} className={`flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold mb-8 transition-colors ${tier.highlight ? "bg-primary text-white hover:bg-primary/90" : "border border-border text-foreground hover:border-primary hover:text-primary"}`}>
                {tier.cta} {!tier.highlight && <ArrowRight className="w-4 h-4 ml-2" />}
              </Link>
              <div className="space-y-3">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/75">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-on callout */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl border border-border bg-white p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">Not sure yet?</p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Book a 15-minute demo first</h3>
            <p className="text-sm text-foreground/60 max-w-md">See the exact workflow for your PMS before committing to any plan. Most offices decide same-day.</p>
          </div>
          <Link to="/book-demo" className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
            Book a demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-12 text-center">Pricing questions answered</h2>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`f${i}`} className="rounded-2xl border border-border bg-white overflow-hidden">
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors group">
                  <span className="font-medium text-foreground text-sm">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 group-data-[state=open]:rotate-180 transition-transform" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <Footer />
    </div>
  );
}
