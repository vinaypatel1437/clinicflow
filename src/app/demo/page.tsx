"use client";

import { FormEvent, useState } from "react";

const services = [
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Emergency Visit",
];

export default function DemoPage() {
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          phone: `${countryCode} ${phone}`.trim(),
          service,
        }),
      });

      if (!response.ok) {
        console.error("Demo API error", await response.text());
        alert("Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting demo form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
        {/* Hero */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            AI Receptionist Demo
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how ClinicFlow AI captures and follows up with new
            dental patients automatically.
          </p>
        </div>

        {/* Demo Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft-lg border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Check Appointment Availability
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Fill this form as if you&apos;re a new patient visiting the
              clinic website.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Dr. Jane Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex gap-3">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-28 px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+91">+91 (IN)</option>
                    </select>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    {services.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-soft-lg hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
                >
                  {isSubmitting && (
                    <span className="mr-2 h-4 w-4 inline-flex items-center justify-center">
                      <span className="h-4 w-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                    </span>
                  )}
                  {isSubmitting ? "Checking availability..." : "Check Availability"}
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-xl border border-green-100 bg-green-50/60 px-4 py-5 sm:px-5 sm:py-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      Thanks! Our AI receptionist is checking availability.
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-700">
                      You will receive an SMS shortly with available appointment
                      times.
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-gray-500">
                      This simulates the instant SMS follow-up sent by
                      ClinicFlow AI.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust / Explanation Section */}
        <section className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            What just happened?
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base text-center max-w-2xl mx-auto">
            This simple demo mirrors the real journey new patients take when
            they contact your clinic through ClinicFlow AI.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white shadow-soft border border-gray-100 p-5 sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Lead captured instantly
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                As soon as a patient submits their details, ClinicFlow AI
                records the lead automatically—no manual entry needed.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-soft border border-gray-100 p-5 sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M8 10h.01M12 10h.01M16 10h.01M5 6a2 2 0 012-2h10a2 2 0 012 2v10l-3-2-3 2-3-2-3 2V6z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                SMS follow-up triggered
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                The AI immediately sends a personalized text so new patients
                never feel ignored or left waiting.
              </p>
            </div>

            <div className="rounded-2xl bg-white shadow-soft border border-gray-100 p-5 sm:p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                Appointment booking sent automatically
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Behind the scenes, ClinicFlow AI syncs with your calendar so
                patients can book visits without tying up your front desk.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

