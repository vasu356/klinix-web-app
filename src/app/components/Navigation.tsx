import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6 min-w-0">
          <Link to="/" className="tracking-tight text-2xl font-semibold text-foreground shrink-0">
            Klinix
          </Link>
          <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <Link to="/product" className="hover:text-foreground transition-colors">
              Product
            </Link>
            <Link to="/how-it-works" className="hover:text-foreground transition-colors">
              How it works
            </Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/resources" className="hover:text-foreground transition-colors">
              Resources
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link to="/signup" className="hidden lg:inline-flex text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Sign up
          </Link>
          <Link to="/signin" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Practice login
          </Link>
          <Link to="/book-demo" className="hidden sm:inline-flex">
            <Button variant="primary">Book a demo</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
