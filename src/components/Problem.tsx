const problems = [
  "Missed calls after hours",
  "Slow follow-ups",
  "Lost website leads",
  "Front desk overload",
];

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center max-w-2xl mx-auto">
          Most Dental Clinics Lose 30–50% of New Inquiries
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl bg-red-50/50 border border-red-100"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="font-medium text-gray-800">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
