"use client";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { motion } from "framer-motion";
import ContactHeader from "./_components/ContactHeader";
import ContactImage from "./_components/ContactImage";
import ContactForm from "./_components/ContactForm";
import ContactSocials from "./_components/ContactSocials";
import ContactChat from "./_components/ContactChat";
import ContactInfoCards from "./_components/ContactInfoCards";
import { containerVariants } from "./_animations/variants";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white text-foreground flex flex-col font-sans selection:bg-primary/20">
      <Navbar />

      <ContactHeader />

      <section className="relative w-full pb-12 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          {/* Left Column: Large Image */}
          <ContactImage />

          {/* Right Column: Sidebar (Form + Socials + Chat) */}
          <motion.div variants={containerVariants} className="lg:col-span-5 flex flex-col gap-5 sticky top-24">
            <ContactForm />
            <ContactSocials />
            <ContactChat />
          </motion.div>
        </motion.div>

        {/* Address & Info Section Cards */}
        <ContactInfoCards />
      </section>

      <Footer />
    </main>
  );
}
