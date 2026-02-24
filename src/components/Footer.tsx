export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-semibold text-white">
              ClinicFlow <span className="text-accent">AI</span>
            </p>
            <p className="text-sm mt-1">AI Automation for Dental Clinics</p>
          </div>
          <a
            href="mailto:info@clinicflow-ai.com"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            info@clinicflow-ai.com
          </a>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ClinicFlow AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
