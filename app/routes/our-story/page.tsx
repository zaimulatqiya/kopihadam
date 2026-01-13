import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

export default function OurStory() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center p-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">Kisah Kami</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">Kisah kami dimulai dengan sebuah cita-cita untuk memberikan kopi yang terbaik kepada para pencinta kopi.</p>
      </section>
      <Footer />
    </main>
  );
}
