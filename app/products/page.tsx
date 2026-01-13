import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col items-center justify-center p-20 text-center">
        <h1 className="text-5xl font-bold text-primary mb-6">Koleksi Produk</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">Jelajahi koleksi produk kami yang terdiri dari berbagai pilihan kopi yang dirancang khusus untuk memberikan pengalaman pencapaian yang sempurna.</p>
      </section>
      <Footer />
    </main>
  );
}
