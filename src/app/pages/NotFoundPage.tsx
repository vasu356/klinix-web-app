import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="pt-28 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4">
            Page not found
          </p>
          <h1 className="text-5xl font-semibold text-foreground tracking-tight mb-6">
            We couldn't find that page.
          </h1>
          <p className="text-base leading-relaxed text-foreground/70 max-w-2xl mx-auto mb-12">
            The link may be broken or the page may have been moved. Return to the Klinix homepage to continue.
          </p>
          <Link to="/">
            <Button variant="primary">Back to homepage</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
