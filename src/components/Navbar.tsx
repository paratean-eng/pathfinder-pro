import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Our Approach", href: "#approach" },
    { label: "Our Community", href: "#community" },
    { label: "Mentors", href: "#mentors" },
    { label: "About Us", href: "#about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-card/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 18h4V10H4zM10 18h4V6h-4zM16 18h4v-4h-4z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight">clymber</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button>
            Start Your Journey
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-card px-4 py-6 md:hidden">
          <ul className="mb-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full">
            Start Your Journey
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
