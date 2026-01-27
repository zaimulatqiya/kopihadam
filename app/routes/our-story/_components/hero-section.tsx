import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

const SECTION_HEIGHT = 1200;

export const HeroSection = () => {
    return (
        <div className="bg-background">
            <div
                style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
                className="relative w-full bg-background"
            >
                <CenterImage />
                <ParallaxImages />
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-background/0 to-background" />
            </div>
        </div>
    );
};

const CenterImage = () => {
    const { scrollY } = useScroll();

    const clipRadius = useTransform(scrollY, [0, SECTION_HEIGHT], [15, 100]);
    const clipPath = useMotionTemplate`circle(${clipRadius}% at 50% 40%)`;

    const scale = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        [1.7, 1]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );
    const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden">
            <motion.div
                className="absolute inset-0 h-full w-full"
                style={{
                    clipPath,
                    opacity,
                }}
            >
                <motion.img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop"
                    alt="Coffee Background"
                    className="h-full w-full object-cover"
                    style={{ scale }}
                />
            </motion.div>
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-12 pb-48 text-center z-20 text-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ opacity: textOpacity }}
            >
                <motion.h1
                    className="flex justify-center text-8xl font-black uppercase text-primary md:text-[10rem]"
                >
                    {Array.from("Kopi Hadam").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: index * 0.05,
                            }}
                            className="inline-block"
                        >
                            <motion.span
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5 + index * 0.2,
                                }}
                                className="inline-block"
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 text-xl font-semibold text-white drop-shadow-md bg-black/20 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 md:text-2xl"
                >
                    Crafting Stories in Every Cup
                </motion.p>
            </motion.div>
        </div>
    );
};

const ParallaxImages = () => {
    const { scrollY } = useScroll();
    const heroFadeOpacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (

        <div className="mx-auto max-w-5xl px-4 pt-[450px] relative z-50">
            <ParallaxImg
                src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Coffee cherries on tree"
                start={0}
                end={-200}
                className="w-1/3 rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all duration-700 ease-out will-change-transform"
                imgClassName="object-cover w-full h-full rounded-[2.5rem]"
            />
            <ParallaxImg
                src="/assets/logo.svg"
                alt="Kopihadam Logo"
                start={150}
                end={-250}
                className="mx-auto w-[40%] -mt-32 md:-mt-48 hover:scale-105 transition-all duration-700 ease-out will-change-transform relative z-20"
                imgClassName="object-contain w-full h-full brightness-0 invert opacity-90 drop-shadow-sm"
            />
            <ParallaxImg
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Barista pouring coffee"
                start={50}
                end={-200}
                className="ml-auto w-1/3 -mt-32 md:-mt-48 rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all duration-700 ease-out will-change-transform"
                customOpacity={heroFadeOpacity}
                imgClassName="object-cover w-full h-full rounded-[2.5rem]"
            />
        </div>
    );
};

type ParallaxImgProps = {
    className: string;
    alt: string;
    src: string;
    start: number;
    end: number;
    customOpacity?: any;
    imgClassName?: string;
};

const ParallaxImg = ({ className, alt, src, start, end, customOpacity, imgClassName }: ParallaxImgProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const defaultOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const opacity = customOpacity || defaultOpacity;
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.div
            className={className}
            ref={ref}
            style={{ transform, opacity }}
        >
            <img
                src={src}
                alt={alt}
                className={imgClassName}
            />
        </motion.div>
    );
};
