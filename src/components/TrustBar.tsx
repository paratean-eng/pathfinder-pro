const TrustBar = () => {
  const companies = [
    { name: "Google", icon: "G" },
    { name: "Amazon", icon: "A" },
    { name: "Microsoft", icon: "M" },
    { name: "McKinsey", icon: "Mc" },
    { name: "Accenture", icon: "Ac" },
    { name: "EY", icon: "EY" },
  ];

  return (
    <section className="border-b border-border bg-card py-10">
      <div className="container">
        <p className="mb-6 text-center text-sm font-semibold text-muted-foreground">
          Get Support From Mentors Who Studied At:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-2xl font-bold text-muted-foreground/40 transition-colors hover:text-muted-foreground/60"
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
