import { CheckCircle2, Mail, Rocket } from "lucide-react";

const HolisticPlatform = () => {
  const steps = [
    { number: "01", label: "Pass CAT", icon: CheckCircle2, color: "text-primary" },
    { number: "02", label: "Clear PI & Get Admission", icon: Mail, color: "text-accent" },
    { number: "03", label: "Excel at College", icon: Rocket, color: "text-primary" },
  ];

  return (
    <section id="approach" className="bg-secondary py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Ongoing Personal Development Modules
          </span>
          <p className="text-muted-foreground">
            You already have potential. Now it's time to own it. While hard skills are essential, they are not everything. Learn to speak up, build self-belief, and find your direction at every stage of your journey.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-sm ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-foreground">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="mx-6 hidden h-0.5 w-20 border-t-2 border-dashed border-primary/30 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolisticPlatform;
