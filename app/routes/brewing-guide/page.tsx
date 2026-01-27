import { WordPullUp } from "../../../components/ui/word-pull-up";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import * as motion from "framer-motion/client";
import BrewingGuideCard from "./_components/BrewingGuideCard";

export default function BrewingGuide() {
  const guides = [
    {
      title: "French Press",
      description: "Discover the classic method of brewing coffee with a French press, known for its rich and full-bodied flavor.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
      color: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      title: "Espresso",
      description: "Master the art of making the perfect espresso shot with our detailed step-by-step guide.",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop",
      color: "bg-amber-50 dark:bg-amber-950/20"
    },
    {
      title: "Pour-Over",
      description: "Explore the precision and control of pour-over brewing for a clean and complex cup of coffee.",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
      color: "bg-stone-50 dark:bg-stone-950/20"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 40, damping: 15, staggerChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      <section className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center relative z-10">
        <div className="mb-8 text-center">
          <WordPullUp
            words="Brewing Guide"
            className="text-4xl font-bold text-primary font-display"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mt-2 max-w-lg mx-auto text-sm"
          >
            Elevate your coffee experience with our expert guides.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          {guides.map((guide, index) => (
            <motion.div key={index} variants={item}>
              <BrewingGuideCard guide={guide} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
