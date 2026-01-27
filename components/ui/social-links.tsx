"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export interface Social {
  name: string
  icon: React.ElementType
  image: string
}

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  socials: Social[]
}

export function SocialLinks({ socials, className, ...props }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = React.useState<string | null>(null)
  const [rotation, setRotation] = React.useState<number>(0)
  const [clicked, setClicked] = React.useState<boolean>(false)

  const animation = {
    scale: clicked ? [1, 1.3, 1] : 1,
    transition: { duration: 0.3 },
  }

  React.useEffect(() => {
    const handleClick = () => {
      setClicked(true)
      setTimeout(() => {
        setClicked(false)
      }, 200)
    }
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [clicked])

  return (
    <div
      className={cn("flex items-center justify-between gap-4 w-full", className)}
      {...props}
    >
      {socials.map((social, index) => {
        const Icon = social.icon
        return (
          <div
            className={cn(
              "relative cursor-pointer flex-1 flex items-center justify-center p-2 rounded-lg hover:bg-zinc-50 transition-all duration-200",
              hoveredSocial && hoveredSocial !== social.name
                ? "opacity-50"
                : "opacity-100"
            )}
            key={index}
            onMouseEnter={() => {
              setHoveredSocial(social.name)
              setRotation(Math.random() * 20 - 10)
            }}
            onMouseLeave={() => setHoveredSocial(null)}
            onClick={() => {
              setClicked(true)
            }}
          >
            <Icon className="w-5 h-5 text-muted-foreground" />
            <AnimatePresence>
              {hoveredSocial === social.name && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center pointer-events-none"
                  animate={animation}
                >
                  <motion.img
                    key={social.name}
                    src={social.image}
                    alt={social.name}
                    className="w-12 h-12 drop-shadow-lg object-contain"
                    initial={{
                      y: -40,
                      rotate: rotation,
                      opacity: 0,
                      filter: "blur(2px)",
                    }}
                    animate={{ y: -50, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(2px)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}