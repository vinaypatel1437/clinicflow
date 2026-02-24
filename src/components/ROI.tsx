export default function ROI() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Turn Missed Calls Into Revenue
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Just 5 extra patients per month can add{" "}
          <span className="font-semibold text-primary">$5k–$15k</span> in
          revenue.
        </p>
        <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 text-accent font-medium">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          ROI-focused automation
        </div>
      </div>
    </section>
  );
}
