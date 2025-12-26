import { Button } from "@/components/ui/button";
import { Check, BookOpen, Briefcase } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      icon: BookOpen,
      name: "Aspirant",
      audience: "For students preparing for CAT 2026",
      price: "₹8,999",
      period: "/one-time",
      description: "Best for students starting their MBA journey",
      features: [
        "CAT – QA Section prep powered by Takshzila – Centre of Excellence",
        "CAT – VARC & DILR Sections prep through active skill-building",
        "Access to high-quality sectional tests and mock tests (50+ in total)",
        "Access to a like-minded community",
        "Weekly mentor interaction",
        "Personal development modules",
      ],
      installments: true,
    },
    {
      icon: Briefcase,
      name: "Advancer",
      audience: "For students post-CAT until admission",
      price: "₹2,999",
      period: "/one-time",
      description: "Best for students preparing for interviews and campus readiness",
      features: [
        "Interview and WAT preparation",
        "Campus readiness courses (Excel, PowerPoint, communication skills)",
        "Weekly mentor interaction",
        "Personal development modules",
        "Access to a network of other incoming top B-school students",
      ],
      installments: true,
    },
  ];

  return (
    <section className="bg-secondary py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Choose your plan
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Choose the plan that fits you
          </h2>
          <p className="text-muted-foreground">
            Structured plans tailored to your preparation level — simple, transparent, effective.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex-1 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col p-8 lg:flex-row lg:gap-8">
                {/* Left Side - Plan Info */}
                <div className="mb-6 lg:mb-0 lg:w-1/2">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-purple text-accent-purple-text">
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-5 text-sm text-muted-foreground">{plan.audience}</p>
                  
                  <div className="mb-2">
                    <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
                  
                  <Button className="w-full">Get Started Today</Button>
                </div>

                {/* Right Side - Features */}
                <div className="border-t border-border pt-6 lg:w-1/2 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.installments && (
                    <div className="mt-6 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium italic text-accent">
                      Easy installments option also available
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
