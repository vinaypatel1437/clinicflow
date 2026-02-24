import { DemoModalProvider } from "@/context/DemoModalContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ROI from "@/components/ROI";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  return (
    <DemoModalProvider>
      <main>
        <Header />
        <Hero />
        <Trust />
        <Problem />
        <Solution />
        <HowItWorks />
        <ROI />
        <FinalCTA />
        <Footer />
      </main>
      <DemoModal />
    </DemoModalProvider>
  );
}
