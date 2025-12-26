import { ClipboardCheck, MapPin, BookOpen, TrendingUp } from "lucide-react";

const JourneySteps = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Assess",
      description: "Take our psychometric & skills assessment.",
      tag: "FREE",
      bgColor: "bg-accent-green",
      textColor: "text-accent-green-text",
    },
    {
      icon: MapPin,
      title: "Plan",
      description: "Receive a personalized roadmap designed for your goals.",
      tag: "FREE",
      bgColor: "bg-accent-green",
      textColor: "text-accent-green-text",
    },
    {
      icon: BookOpen,
      title: "Learn",
      description: "Access our courses & learn at your own pace with supervised mentorship.",
      tag: null,
      bgColor: "bg-accent-purple",
      textColor: "text-accent-purple-text",
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Track your progress, connect with others & grow your professional network.",
      tag: null,
      bgColor: "bg-accent-purple",
      textColor: "text-accent-purple-text",
    },
  ];

  return (
    <section className="bg-muted py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Your journey
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Your Personalised Journey in 4 Steps
          </h2>
          <p className="text-muted-foreground">
            We don't believe in a one-size-fits-all approach; we meet you where you are
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col items-stretch gap-5 md:flex-row md:items-start md:justify-between">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-center gap-4 md:flex-col md:gap-0">
              {/* Step Card */}
              <div className="relative flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:w-full">
                {step.tag && (
                  <span className="absolute right-4 top-4 rounded bg-foreground px-2 py-0.5 text-[10px] font-bold uppercase text-background">
                    {step.tag}
                  </span>
                )}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${step.bgColor} ${step.textColor}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-lg font-bold">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector (hidden on mobile, shown between cards on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden h-0.5 w-10 flex-shrink-0 bg-border md:mt-12 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
