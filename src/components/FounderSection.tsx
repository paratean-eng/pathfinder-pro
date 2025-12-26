import founderImg from "@/assets/founder.png";

const FounderSection = () => {
  return (
    <section id="about" className="bg-card py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Founder's story
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            The Story Behind Clymber
          </h2>
          <p className="text-muted-foreground">
            Built from real struggles, shaped for real students, designed for real growth.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Founder Image */}
          <div className="relative flex-shrink-0">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-secondary lg:h-80 lg:w-80">
              <img
                src={founderImg}
                alt="Ashwani Kumar - Founder"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating Labels */}
            <div className="absolute -right-4 top-1/4 rounded-full bg-accent-purple px-4 py-2 text-sm font-semibold text-accent-purple-text shadow-lg">
              500+ Learners
            </div>
            <div className="absolute -left-4 bottom-1/4 rounded-full bg-accent-purple px-4 py-2 text-sm font-semibold text-accent-purple-text shadow-lg">
              4.9 ★ Rating
            </div>
            {/* Decorative Line */}
            <svg className="absolute -right-8 top-1/2 hidden lg:block" width="80" height="60" viewBox="0 0 80 60">
              <path d="M0,0 Q40,30 70,60" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6,4" opacity="0.5" />
            </svg>
          </div>

          {/* Content Card */}
          <div className="flex-1 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold">Hi, I'm Ashwani</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <em>I am a first-generation college graduate who made it to IIM Bangalore through India's reservation system.</em> I was awarded a <strong className="text-foreground">100% scholarship</strong> for my MBA. Having worked in education for over 6 years and through personally having mentored 500+ students over the past years, I witnessed that <strong className="text-foreground">representation without preparation creates new barriers.</strong> Many students from marginalized backgrounds reach India's top colleges, but few thrive there.
              </p>
              <p>
                <em>Studies show that students from reserved-category backgrounds not only struggle in competitive academic environments, but they are also</em> <strong className="text-foreground">more likely to drop out</strong> and <strong className="text-foreground">achieve lower paying jobs during placements.</strong>
              </p>
              <p>
                <strong className="text-foreground italic">Clymber was born to change that.</strong> <em>To help every student not just get in, but rise up – by building the skills, mindset, and community needed to truly</em> <strong className="text-foreground">compete and belong.</strong>
              </p>
            </div>
            {/* Author Signature */}
            <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                AK
              </div>
              <div>
                <p className="font-bold text-foreground">Ashwani Kumar</p>
                <p className="text-sm text-muted-foreground">MBA IIM Bangalore | Ex-Teach For India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
