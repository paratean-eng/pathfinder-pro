import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-0 rounded-2xl border border-border bg-card shadow-sm md:grid-cols-2">
            {/* Vision */}
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-primary text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To one day, make reservations unnecessary because all aspiring students can compete equally. A future where opportunity depends on effort only, regardless of background.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-primary text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between access and achievement – so every student; regardless of background, can perform, compete and belong.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
