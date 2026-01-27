"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { SocialLinks } from "../../../../components/ui/social-links";
import { containerVariants, itemVariants } from "../_animations/variants";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

export default function ContactSocials() {
    return (
        <motion.div variants={containerVariants} className="bg-white/80 backdrop-blur-xl border border-primary/10 rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <motion.div variants={itemVariants}>
                <SocialLinks
                    socials={[
                        { name: "Instagram", icon: Instagram, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" },
                        { name: "Facebook", icon: Facebook, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" },
                        { name: "X", icon: XIcon, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/2048px-X_logo_2023.svg.png" },
                    ]}
                />
            </motion.div>
        </motion.div>
    );
}
