import { Check } from "lucide-react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export function PricingSection() {
  const tiers = [
    {
      name: "Solo",
      price: "$149",
      period: "/mo",
      description: "For single-chair practices",
      features: [
        "Unlimited patient intake forms",
        "AI medical history review",
        "1 PMS integration",
        "Email support",
        "HIPAA compliance",
      ],
      highlighted: false,
      href: "/pricing/solo",
    },
    {
      name: "Practice",
      price: "$349",
      period: "/mo",
      description: "Most popular for 2-5 operatories",
      features: [
        "Everything in Solo",
        "Multiple PMS integrations",
        "Custom form templates",
        "Priority support",
        "Advanced analytics",
        "Team training sessions",
      ],
      highlighted: true,
      href: "/pricing/practice",
    },
    {
      name: "Multi-location",
      price: "Custom",
      period: "",
      description: "For groups with 3+ locations",
      features: [
        "Everything in Practice",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "Volume pricing",
        "White-label options",
      ],
      highlighted: false,
      href: "/pricing/multi-location",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-4 tracking-tight" style={{ fontSize: '40px', fontWeight: 600, color: '#0A0A0A' }}>
          Simple pricing. No per-patient fees.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`p-8 border rounded-xl ${
                tier.highlighted
                  ? "border-primary shadow-xl scale-105 bg-white"
                  : "border-border bg-white"
              }`}
            >
              {tier.highlighted && (
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  Most popular
                </div>
              )}
              <h3 className="mb-2" style={{ fontSize: '24px', fontWeight: 600, color: '#0A0A0A' }}>
                {tier.name}
              </h3>
              <div className="flex items-baseline mb-2">
                <span className="tracking-tight" style={{ fontSize: '48px', fontWeight: 600, color: '#0A0A0A' }}>
                  {tier.price}
                </span>
                {tier.period && <span className="text-muted-foreground ml-1">{tier.period}</span>}
              </div>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <Link to={tier.href} className="block mb-6">
                <Button variant="primary" className="w-full">
                  Get started
                </Button>
              </Link>
              <div className="space-y-3">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          Free 30-day trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
