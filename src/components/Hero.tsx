import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-students.png";

const Hero = () => {
  return (
    <header className="relative min-h-[85vh] overflow-hidden bg-gradient-bg py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
          {/* Content */}
          <div className="z-10 max-w-xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5">
              <span className="mr-2 h-1 w-1 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary">A holistic platform</span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-[3.25rem]">
              Get into top IIMs with a{" "}
              <span className="text-gradient">personalized learning path</span>{" "}
              designed just for you.
            </h1>

            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              We support you - before, during, and after your studies.
            </p>

            <Button size="lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[400px] w-[400px] rounded-full bg-secondary lg:h-[500px] lg:w-[500px]" />
            <img
              src={heroImage}
              alt="Students preparing for IIM"
              className="relative z-10 h-auto w-[320px] rounded-b-[200px] object-cover lg:w-[420px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
