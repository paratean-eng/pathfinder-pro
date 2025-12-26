import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Our Approach", href: "#approach" },
    { label: "Our Community", href: "#community" },
    { label: "About Us", href: "#about" },
  ];

  const companyLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0B0F19] py-20 text-[#9CA3AF]">
      <div className="container relative z-10">
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gray-400 to-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B0F19]">
                  <path d="M4 18h4V10H4zM10 18h4V6h-4zM16 18h4v-4h-4z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white">clymber</span>
            </a>
            <p className="text-sm">Mentorship. Merit. Mobility.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="mb-6 font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-white">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-white">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@clymber.in
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Bangalore, Karnataka
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          © 2024 Clymber Education. All rights reserved.
        </div>
      </div>

      {/* Large Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden">
        <div className="flex items-center gap-4 translate-y-[30%]">
          <span className="select-none text-[12vw] font-black text-white/[0.03] leading-none">Clymber</span>
          <div className="flex h-[8vw] w-[8vw] items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-primary/20">
              <path d="M4 18h4V10H4zM10 18h4V6h-4zM16 18h4v-4h-4z" fill="currentColor" />
            </svg>
          </div>
          <span className="select-none text-[12vw] font-black text-white/[0.03] leading-none">Clym</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
