"use client";

import Image from "next/image";
import logo from "@/app/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="relative h-10 w-10 sm:h-11 sm:w-11">
            <Image
              src={logo}
              alt="ClinicFlow AI logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="text-xl font-semibold text-gray-900">
            ClinicFlow <span className="text-primary">AI</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block"
          >
            How It Works
          </a>
          <a
            href="https://calendly.com/clinicflow-ai-info/free-ai-receptionist-demo"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-soft"
          >
            Book Free Demo
          </a>
        </div>
      </nav>
    </header>
  );
}
