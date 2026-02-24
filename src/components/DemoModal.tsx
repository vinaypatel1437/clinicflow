"use client";

import { useState, useEffect } from "react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Simulate API call - replace with your actual endpoint (e.g., Calendly redirect, form service)
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Demo request:", data);
    setLoading(false);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 id="demo-modal-title" className="text-xl font-semibold text-gray-900 mb-2">
              Request Received!
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;ll reach out within 24 hours to schedule your free demo.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="demo-modal-title" className="text-2xl font-bold text-gray-900 mb-2">
              Book Your Free Demo
            </h2>
            <p className="text-gray-600 mb-6">
              See how ClinicFlow AI can transform your dental practice.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="Dr. Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="jane@yourclinic.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="practice" className="block text-sm font-medium text-gray-700 mb-1">
                  Practice Name
                </label>
                <input
                  id="practice"
                  name="practice"
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  placeholder="Smith Family Dental"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Request Free Demo"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
