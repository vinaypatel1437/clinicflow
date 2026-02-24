"use client";

import { useDemoModal } from "@/context/DemoModalContext";

export default function FinalCTA() {
  const { openModal } = useDemoModal();

  return (
    <section id="demo" className="py-24 px-6 bg-primary scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Book More Patients Automatically?
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          See how ClinicFlow AI can transform your practice. Book a free,
          no-obligation demo.
        </p>
        <a
          href="https://calendly.com/clinicflow-ai-info/free-ai-receptionist-demo"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-primary font-semibold text-lg hover:bg-blue-50 transition-all shadow-soft-lg"
        >
          Book Your Free Demo
        </a>
      </div>
    </section>
  );
}
