import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { MagicText } from "@/components/ui/magic-text";
import { WordPullUp } from "@/components/ui/word-pull-up";

export const FeatureSection = () => {


    const sections = [
        {
            id: 1,
            title: "From Bean to Cup",
            description: "It starts with the soil. We carefully select distinct micro-climates to grow our heritage varietals. Hand-picked at peak ripeness, our cherries are processed with methods that preserve their intrinsic character.",
            imageUrl: '/story-assets/bean-to-cup.png',
            reverse: false
        },
        {
            id: 2,
            title: "Roasting Perfection",
            description: "Heat meets art. Our master roasters coax out unique flavor profiles, balancing time and temperature with obsessive precision. We don't just roast coffee; we unlock its soul.",
            imageUrl: '/story-assets/roasting.png',
            reverse: true
        },
        {
            id: 3,
            title: "Packaging with Purpose",
            description: "Sustainability isn't an afterthought. Our biodegradable packaging ensures that while our coffee stays fresh, our footprint remains light. Beauty in design, responsibility in action.",
            imageUrl: '/story-assets/packaging.png',
            reverse: false
        }
    ];

    return (
        <div className="flex flex-col bg-background text-foreground pb-24 relative overflow-hidden">
            {/* Ambient Background Blobs - Optimized */}
            <div className="absolute top-[0%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Subtle Grain/Texture Overlay - Optimized */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />


            {sections.map((section) => (
                <FeatureCard key={section.id} section={section} />
            ))}
        </div>
    );
};

const FeatureCard = ({ section }: { section: any }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 1]);

    const imageX = useTransform(scrollYProgress, [0, 1], [section.reverse ? -100 : 100, 0]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <div
            ref={ref}
            className="flex items-center justify-center px-4 py-16 md:py-24"
        >
            <div className={`relative flex flex-col md:flex-row w-full max-w-5xl overflow-hidden rounded-[2.5rem] shadow-xl border border-white/40 transition-shadow duration-500 ${section.reverse ? 'md:flex-row-reverse' : ''}`}>

                {/* Text Side - Gradient Primary Color */}
                <div className="flex-1 bg-gradient-to-br from-primary to-[#500000] p-10 md:p-16 flex flex-col justify-center relative z-10">
                    {/* Subtle Texture - Optimized */}
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

                    <motion.div style={{ y, opacity }} className="will-change-transform transform-gpu">
                        <WordPullUp
                            words={section.title}
                            className="text-3xl md:text-5xl font-black uppercase text-white mb-8 tracking-tight drop-shadow-lg text-left"
                        />

                        <MagicText
                            text={section.description}
                            className="text-lg md:text-xl text-zinc-100 leading-relaxed font-light tracking-wide mb-8 text-justify"
                            offset={["start end", "center 70%"]}
                        />

                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 120, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-0.5 bg-gradient-to-r from-amber-200 to-transparent mt-12 rounded-full"
                        />
                    </motion.div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative min-h-[400px] md:h-auto overflow-hidden bg-white">
                    <motion.div
                        style={{
                            x: imageX,
                            opacity: imageOpacity
                        }}
                        className="absolute inset-0 will-change-transform transform-gpu"
                    >
                        <motion.img
                            style={{ scale }}
                            src={section.imageUrl}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full object-cover will-change-transform"
                            alt={`Section ${section.id}`}
                        />
                    </motion.div>
                    {/* Inner Shadow for Depth at the seam */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#3f0000]/30 to-transparent pointer-events-none opacity-60" />
                </div>
            </div>
        </div>
    );
};
