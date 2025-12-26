import mentor1 from "@/assets/mentor-1.png";
import mentor2 from "@/assets/mentor-2.png";
import mentor3 from "@/assets/mentor-3.png";
import mentor4 from "@/assets/mentor-4.png";

const MentorsGrid = () => {
  const mentors = [
    {
      name: "Somya Aggrawal",
      role: "MBA, IIM Ahmedabad",
      company: "Technology Consultant, Accenture",
      companyLogo: "accenture",
      image: mentor1,
    },
    {
      name: "Shubhanshu Gour",
      role: "MBA, IIM Bangalore",
      company: "Consultant, EY Parthenon",
      companyLogo: "ey",
      image: mentor2,
    },
    {
      name: "Nishtha Sethi",
      role: "MBA, IIM Bangalore",
      company: "Junior Associate, McKinsey",
      companyLogo: "mckinsey",
      image: mentor3,
    },
    {
      name: "Sheshadri Ramalingam",
      role: "MBA, IIM Bangalore",
      company: "Management Consultant, Accenture",
      companyLogo: "accenture",
      image: mentor4,
    },
  ];

  return (
    <section id="mentors" className="bg-secondary py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Personalized Mentorship
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Meet our Super Mentors
          </h2>
          <p className="text-muted-foreground">
            Clymber helps you build the kind of support that many of us cannot inherit from our families - a network of mentors, peers, and role models who've walked the same path and want to see you succeed.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="group text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-5 overflow-hidden rounded-2xl">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="mb-1 text-lg font-bold">{mentor.name}</h4>
              <p className="mb-2 text-sm text-muted-foreground">{mentor.role}</p>
              <p className="text-sm font-medium text-muted-foreground">{mentor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsGrid;
