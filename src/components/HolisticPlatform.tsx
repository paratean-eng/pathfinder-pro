const HolisticPlatform = () => {
  return (
    <section id="approach" className="bg-card py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Your personal path
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            A Holistic Platform for Your Success
          </h2>
          <p className="text-muted-foreground">
            Everything you need to succeed in CAT and beyond, all in one place
          </p>
        </div>

        {/* Orbit Graphic */}
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16">
          {/* Orbit Ring with Dashboard */}
          <div className="relative h-[350px] w-[350px] flex-shrink-0 md:h-[400px] md:w-[400px]">
            {/* Orbit Circle SVG */}
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.5" />
              <path
                d="M 50,5 a 45,45 0 0,1 45,45"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Orbit Dots */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">01</div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">02</div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">03</div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">04</div>
            </div>

            {/* Center Dashboard Mockup */}
            <div className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 md:w-[260px]">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                {/* Mockup Header */}
                <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                </div>
                {/* Mockup Body */}
                <div className="p-5 text-center">
                  <h5 className="mb-3 text-sm font-semibold text-foreground">CAT Preparation</h5>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[5px] border-primary">
                    <span className="text-xl font-bold text-primary">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Text */}
          <div className="max-w-sm text-center lg:text-left">
            <h3 className="mb-3 text-2xl font-bold">CAT Preparation</h3>
            <p className="text-muted-foreground">
              Comprehensive CAT prep with adaptive learning, mock tests, and personalized study plans designed by top IIM alumni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticPlatform;
