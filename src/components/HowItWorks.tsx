const steps = [
  {
    number: "1",
    title: "Connect your website & phone",
    description: "Simple integration with your existing systems. No technical setup required.",
  },
  {
    number: "2",
    title: "AI handles inquiries automatically",
    description: "Our AI responds instantly, qualifies leads, and follows up 24/7.",
  },
  {
    number: "3",
    title: "More booked appointments every week",
    description: "Watch your calendar fill up with qualified new patients.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-16">
          Get started in minutes. No complex setup.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-soft-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
