import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Akanksha Nene",
      image: testimonial1,
      callsConverted: "IIM Bangalore and many other top IIMs",
      callsReceived: "All top B-Schools",
      quote: '"Ashwani helped me with perspective more than anything else. In a world that\'s so focused on numbers and ranks, people forget what really matters. Conversations with Ashwani really helped me get things that were important to me in focus."',
    },
    {
      name: "Roopshree Dadel",
      image: testimonial2,
      callsConverted: "IIM Indore, IIM Vishakapatnam",
      callsReceived: "IIM Indore, CAP IIMs and baby IIMs",
      quote: '"I thought CAT was the finish line, but the entire experience showed me it was just the start. The confidence, communication, and self-belief I built helped me become equipped to do well at my MBA at IIM Indore."',
    },
    {
      name: "Dhruv Parmar",
      image: testimonial3,
      callsConverted: "Nirma University, SIBM",
      callsReceived: "NIRMA University, BIMTECH, SSBF Pune, and SOIL Gurgaon",
      quote: '"Ashwani Bhaiyya was not only an MBA process but also a genuine life about his students, offering insights into MBA colleges. His unwavering support advice helped me navigate the stressful and gain perspective on my future."',
    },
  ];

  return (
    <section className="bg-card py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Our Success Stories
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Real Stories, Real Growth
          </h2>
          <p className="text-muted-foreground">
            Journey of learners who started just like you — and grew into confident, campus-ready achievers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                </div>
              </div>
              <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Calls Converted:</span> {testimonial.callsConverted}</p>
                <p><span className="font-medium text-foreground">Calls Received:</span> {testimonial.callsReceived}</p>
              </div>
              <p className="text-sm italic text-muted-foreground">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
