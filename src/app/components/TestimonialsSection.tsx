export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We cut intake time by 80% in the first month. Our front desk team actually has time to greet patients now instead of chasing down illegible forms.",
      author: "Sarah Martinez",
      role: "Office Manager",
      clinic: "Bright Smiles Dental",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Nzg4NDU1OTV8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      quote: "The AI flagged a drug allergy that would have been easy to miss on paper. This system doesn't just save time — it prevents mistakes.",
      author: "Dr. Michael Chen",
      role: "Practice Owner",
      clinic: "Summit Dental Group",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3Nzg5Mjk2NzV8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      quote: "Setup took less than a week and the Dentrix integration was seamless. Our elderly receptionist picked it up in one training session.",
      author: "Jennifer Lopez",
      role: "Operations Director",
      clinic: "Coastal Family Dentistry",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Nzg4NDU1OTV8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
  ];

  const metrics = [
    { value: "200+", label: "clinics onboarded" },
    { value: "1.2M", label: "patients processed" },
    { value: "4.9/5", label: "support rating" },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold mb-3">Customers</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Dental teams trust Klinix to keep intake on track.
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-[2rem] border border-border bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
              <p className="text-foreground/80 leading-relaxed mb-6">“{testimonial.quote}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.clinic}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="rounded-[1.75rem] border border-border bg-white p-8 shadow-sm">
              <div className="text-4xl font-semibold text-foreground mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

