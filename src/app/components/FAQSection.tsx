import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "Is Klinix HIPAA compliant?",
      answer:
        "Yes. Klinix is fully HIPAA compliant with end-to-end encryption, signed Business Associate Agreements (BAAs), and SOC 2 Type II certification. All patient data is encrypted in transit and at rest, and we never use patient data to train AI models.",
    },
    {
      question: "Which practice management systems do you integrate with?",
      answer:
        "Klinix integrates natively with Dentrix, Eaglesoft, Open Dental, Curve, and several other major PMS platforms. We're constantly adding new integrations based on customer demand. If you don't see your PMS listed, contact us — we may already be working on it.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most practices are up and running within 3-5 business days. This includes PMS integration, form customization, and team training. We provide white-glove onboarding with a dedicated implementation specialist.",
    },
    {
      question: "What happens if a patient doesn't have a smartphone?",
      answer:
        "Patients can complete forms on any device with a web browser — smartphone, tablet, or computer. For patients without internet access, your front desk can help them fill out the form on an office tablet, which is still faster than paper and ensures the data is captured correctly.",
    },
    {
      question: "Can I customize the intake forms?",
      answer:
        "Absolutely. You can customize questions, add your practice branding, and create different form templates for different appointment types. Our team helps you configure forms during onboarding to match your exact workflow.",
    },
    {
      question: "Is patient data ever used to train AI models?",
      answer:
        "No. We never use patient data to train AI models. Our AI review system operates on predefined medical rules and patterns, and all patient data remains private and secure within your practice's account.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center mb-16 tracking-tight" style={{ fontSize: '40px', fontWeight: 600, color: '#0A0A0A' }}>
          Frequently asked questions
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <Accordion.Trigger className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/30 transition-colors group">
                <span className="font-medium text-left" style={{ fontSize: '18px', color: '#0A0A0A' }}>
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="px-6 pb-5 text-foreground/70 leading-relaxed">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
