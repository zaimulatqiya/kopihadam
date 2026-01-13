import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center p-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">Contact Us</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">We'd love to hear from you. Get in touch with our team.</p>
      </section>
      <Footer />
    </main>
  );
}
