const testimonials = [
  {
    quote:
      "We went from missing 40% of after-hours calls to capturing every single lead. Game changer.",
    author: "Dr. Sarah Mitchell",
    role: "Mitchell Family Dental, Austin TX",
  },
  {
    quote:
      "The AI follows up faster than we ever could. Our new patient bookings are up 35%.",
    author: "Dr. James Chen",
    role: "Smile Perfect Dentistry, Denver CO",
  },
  {
    quote:
      "Finally, someone answers when we can&apos;t. Our front desk team loves the support.",
    author: "Dr. Emily Rodriguez",
    role: "Bright Smiles Dental, Miami FL",
  },
  {
    quote:
      "ROI was clear within the first month. Best investment we&apos;ve made in years.",
    author: "Dr. Michael Thompson",
    role: "Thompson Dental Group, Seattle WA",
  },
];

export default function Trust() {
  return (
    <section className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          Helping dental clinics capture and convert more patients automatically
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100"
            >
              <p className="text-gray-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-semibold text-gray-900">{t.author}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
