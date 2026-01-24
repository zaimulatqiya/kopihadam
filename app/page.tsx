import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}
