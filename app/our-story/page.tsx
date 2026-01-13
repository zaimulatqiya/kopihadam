import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OurStory() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center p-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">Our Story</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">Every cup starts with a seed, and every seed has a story. This is ours.</p>
      </section>
      <Footer />
    </main>
  );
}
