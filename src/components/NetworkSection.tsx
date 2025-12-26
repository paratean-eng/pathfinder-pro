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
    { src: avatar1, style: { top: "15%", left: "25%" }, tooltip: null },
    { src: avatar2, style: { top: "35%", left: "12%" }, tooltip: null },
    { src: avatar3, style: { top: "28%", left: "38%" }, tooltip: "Mock Analysis?" },
    { src: avatar4, style: { top: "55%", left: "28%" }, tooltip: "Got A LRDI Doubt!" },
    { src: avatar5, style: { top: "48%", left: "50%" }, tooltip: null },
    { src: avatar6, style: { top: "18%", left: "65%" }, tooltip: "Great Discussion" },
    { src: avatar7, style: { top: "50%", left: "68%" }, tooltip: "Group Study?" },
    { src: avatar8, style: { top: "65%", left: "82%" }, tooltip: null },
  ];

  return (
    <section id="community" className="overflow-hidden bg-secondary/30 py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block border-l-2 border-primary pl-3 text-sm font-bold uppercase tracking-wider text-primary">
            Find Your Network
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]">
            Connect with others who are working<br className="hidden md:block" /> towards the same goal
          </h2>
          <p className="text-muted-foreground">
            Having a community is an <strong className="text-foreground">underrated superpower</strong>. Don't have one yet?<br />
            Clymber helps you build it.
          </p>
        </div>

        {/* Network Visualization */}
        <div className="relative mx-auto h-[450px] max-w-4xl md:h-[500px]">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            {/* Green dashed lines */}
            <path d="M200,175 C280,120 350,180 400,200" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="8,6" opacity="0.6" />
            <path d="M100,200 C180,240 220,210 280,175" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="8,6" opacity="0.6" />
            <path d="M220,280 C280,300 350,270 400,240" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="8,6" opacity="0.6" />
            <path d="M520,100 C560,140 540,180 520,200" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="8,6" opacity="0.6" />
            <path d="M540,250 C580,280 620,300 680,320" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="8,6" opacity="0.6" />
            
            {/* Blue dashed lines */}
            <path d="M300,150 C340,180 380,170 400,200" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8,6" opacity="0.5" />
            <path d="M400,200 L400,280" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.4" />
            <path d="M400,280 C450,320 500,300 540,250" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="8,6" opacity="0.5" />
          </svg>

          {/* Avatars */}
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="group absolute transition-transform duration-300 hover:z-10 hover:scale-110"
              style={avatar.style}
            >
              <div className="relative">
                <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-card shadow-lg md:h-16 md:w-16">
                  <img src={avatar.src} alt="Community member" className="h-full w-full object-cover" />
                </div>
                {avatar.tooltip && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary bg-card px-3 py-1.5 text-xs font-semibold text-primary opacity-0 shadow-md transition-all group-hover:-top-14 group-hover:opacity-100">
                    {avatar.tooltip}
                    <span className="ml-1 inline-block h-2 w-2 rounded-sm bg-primary" />
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
