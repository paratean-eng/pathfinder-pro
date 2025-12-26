import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";

const NetworkSection = () => {
  const avatars = [
    { src: avatar1, position: "top-[15%] left-[30%]", tooltip: null },
    { src: avatar2, position: "top-[35%] left-[15%]", tooltip: null },
    { src: avatar3, position: "top-[30%] left-[40%]", tooltip: "Mock Analysis?" },
    { src: avatar4, position: "top-[55%] left-[35%]", tooltip: null },
    { src: avatar5, position: "top-[50%] left-[50%]", tooltip: "Got A LRDI Doubt!" },
    { src: avatar6, position: "top-[20%] left-[65%]", tooltip: "Great Discussion" },
    { src: avatar7, position: "top-[55%] left-[70%]", tooltip: "Group Study?" },
    { src: avatar8, position: "top-[65%] left-[85%]", tooltip: null },
  ];

  return (
    <section id="community" className="overflow-hidden bg-secondary/50 py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Find Your Network
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Connect with others who are working towards the same goal
          </h2>
          <p className="text-muted-foreground">
            Having a community is an <strong className="text-foreground">underrated superpower</strong>. Don't have one yet? Clymber helps you build it.
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative mx-auto h-[500px] max-w-4xl">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <path d="M240,175 Q320,140 400,200" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
            <path d="M120,200 Q200,260 280,225" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
            <path d="M400,200 L400,275" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.4" />
            <path d="M280,280 Q340,320 400,275" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
            <path d="M520,100 Q560,160 560,200" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
            <path d="M560,280 Q600,320 680,330" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
          </svg>

          {/* Avatars */}
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className={`absolute ${avatar.position} group transition-transform duration-300 hover:scale-110`}
            >
              <div className="relative">
                <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-card shadow-lg lg:h-16 lg:w-16">
                  <img src={avatar.src} alt="Community member" className="h-full w-full object-cover" />
                </div>
                {avatar.tooltip && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary bg-card px-3 py-1 text-xs font-semibold text-primary opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                    {avatar.tooltip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
