import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", to: "/product" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources", to: "/resources" },
];

// Pages where the hero is light enough that a transparent-then-solid nav looks good.
// On every OTHER page, we always show solid white immediately.
const HERO_PAGES = ["/"];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const hasTransparentHero = HERO_PAGES.includes(pathname);

  // Always reset scroll state when navigating to a new page
  useEffect(() => {
    setScrolled(window.scrollY > 16);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid when: not a hero page, OR user has scrolled down
  const solid = !hasTransparentHero || scrolled;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          solid
            ? "bg-white border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Left: logo + nav links */}
          <div className="flex items-center gap-8 min-w-0">
            <Link
              to="/"
              className="text-xl font-semibold tracking-tight text-foreground shrink-0"
            >
              Klinix
            </Link>
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    pathname === l.to
                      ? "text-primary"
                      : "text-foreground/65 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: auth + CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/signin"
              className="text-sm font-medium text-foreground/65 hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium text-foreground/65 hover:text-foreground transition-colors"
            >
              Sign up
            </Link>
            <Link
              to="/book-demo"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors shadow-sm"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-foreground/70 hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-16 overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`py-3.5 text-base font-medium border-b border-border transition-colors ${
                  pathname === l.to ? "text-primary" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                to="/book-demo"
                className="rounded-full bg-primary py-3 text-center text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Book a demo
              </Link>
              <Link
                to="/signin"
                className="rounded-full border border-border py-3 text-center text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
