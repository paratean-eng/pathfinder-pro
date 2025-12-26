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
    <footer className="relative overflow-hidden bg-foreground py-16 text-background/70">
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-muted to-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                  <path d="M4 18h4V10H4zM10 18h4V6h-4zM16 18h4v-4h-4z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-background">clymber</span>
            </a>
            <p className="text-sm">Mentorship. Merit. Mobility.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="mb-4 font-bold text-background">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-background">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-background">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-background">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-background">Contact Us</h4>
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
        <div className="border-t border-background/10 pt-8 text-center text-sm">
          © 2024 Clymber Education. All rights reserved.
        </div>
      </div>

      {/* Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 select-none text-[15vw] font-black text-background/[0.03]">
        Clymber
      </div>
    </footer>
  );
};

export default Footer;
