"use client";

import Image from "next/image";
import heroImage from "@/app/hero.png";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Never Miss Another Dental Patient Again
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
              AI receptionist that replies instantly, follows up automatically,
              and books appointments 24/7.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/clinicflow-ai-info/free-ai-receptionist-demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-blue-600 transition-all shadow-soft-lg hover:shadow-lg"
              >
                Book Free Demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="max-w-lg mx-auto rounded-2xl overflow-hidden shadow-soft-lg border border-gray-100 bg-black">
              <Image
                src={heroImage}
                alt="ClinicFlow AI receptionist automation for dental clinics"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
