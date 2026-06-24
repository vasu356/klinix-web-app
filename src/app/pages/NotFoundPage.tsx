import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowRight } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 pb-24 px-6 flex items-center min-h-[70vh]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-8xl font-bold text-primary/15 mb-6 leading-none">404</p>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-5">Page not found</span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-5">We couldn't find that page.</h1>
          <p className="text-lg text-foreground/65 leading-8 mb-10">The link may be broken or the page may have moved. Head back to the homepage or visit one of the pages below.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="/" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">Back to homepage</Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
              Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            {["/product", "/how-it-works", "/features", "/resources"].map((l) => (
              <Link key={l} to={l} className="text-muted-foreground hover:text-primary transition-colors capitalize">{l.replace("/", "").replace("-", " ")}</Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
