import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mentorVideoImg from "@/assets/mentor-video.png";

const MentorSection = () => {
  const benefits = [
    "Weekly 1:1 mentor calls",
    "Personalised guidance",
    "Track study hours & accuracy",
    "Monitor real progress",
  ];

  return (
    <section className="bg-card py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Visual - Laptop Mockup */}
          <div className="relative flex-1">
            <div className="relative mx-auto max-w-lg">
              {/* Laptop Frame */}
              <div className="overflow-hidden rounded-2xl border-8 border-gray-800 bg-gray-800 shadow-2xl">
                <img
                  src={mentorVideoImg}
                  alt="Mentor video call interface with progress dashboard"
                  className="w-full"
                />
              </div>
              {/* Laptop Base */}
              <div className="mx-auto h-4 w-[80%] rounded-b-xl bg-gray-700" />
              <div className="mx-auto h-1 w-[60%] rounded-b bg-gray-600" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
              Meet Your Mentor
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Work 1:1 with a mentor who is a current IIM student/alumni
            </h2>
            <p className="mb-6 text-muted-foreground">
              From doubt solving to performance insights — get the mentorship and structure you need to grow faster.
            </p>

            <ul className="mb-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-foreground">
                  <span className="text-lg text-primary">•</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
