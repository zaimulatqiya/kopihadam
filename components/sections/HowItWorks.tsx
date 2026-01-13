"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Pilih Kopi Anda",
    description: "Terokai koleksi biji kopi premium kami yang dipilih khas dari ladang terbaik.",
    image: "/assets/step-1.png",
  },
  {
    id: 2,
    title: "Dipanggang Segar",
    description: "Kami memanggang setiap pesanan dalam kelompok kecil untuk menjamin aroma maksimum.",
    image: "/assets/step-2.png",
  },
  {
    id: 3,
    title: "Dihantar Terus",
    description: "Penghantaran pantas terus ke pintu rumah anda mengikut jadual yang anda tetapkan.",
    image: "/assets/step-3.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HowItWorks() {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-secondary/20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-24">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Proses Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Dari Ladang Ke Cawan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Kami memastikan setiap langkah diambil dengan teliti untuk memberikan pengalaman kopi terbaik kepada anda.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[100px] left-0 w-full h-0.5 border-t-2 border-dashed border-primary/20 -z-10 bg-transparent" />

          {steps.map((step, index) => (
            <motion.div key={step.id} variants={itemVariants} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                {/* Image Container */}
                <div className="w-48 h-48 md:w-56 md:h-56 relative z-10 bg-white rounded-full shadow-lg p-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl border-4 border-white">
                  <div className="absolute inset-0 rounded-full bg-secondary/30 scale-90 -z-10 group-hover:scale-110 transition-transform duration-500" />
                  <Image src={step.image} alt={step.title} width={200} height={200} className="object-contain w-full h-full drop-shadow-md" />
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-20 border-2 border-white">{step.id}</div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
