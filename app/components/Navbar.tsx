"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Product Collection", href: "/products" },
    { label: "Brewing Guide", href: "/brewing-guide" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 bg-white sticky top-0 z-50 shadow-sm">
      {/* Logo Section */}
      <Link href="/" className="flex flex-col items-start gap-0.5 group shrink-0">
        <span className="text-base font-medium text-primary/80 tracking-wide ml-0.5">KOPI</span>
        <span className="bg-primary text-[#FFFBEA] px-2 py-0.5 text-xl font-extrabold tracking-tight uppercase transform -skew-x-6 group-hover:skew-x-0 transition-transform duration-300">HADAM</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`text-sm tracking-wide transition-colors relative font-medium
                ${isActive(item.href) ? "text-primary font-bold after:w-full" : "text-foreground/80 hover:text-primary hover:after:w-full"}
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:w-0
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Auth Buttons & Mobile Menu */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-full transition-colors cursor-pointer">Login</button>
          <button className="px-5 py-2 text-sm font-bold bg-primary text-[#FFFBEA] rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-md cursor-pointer">Register</button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-primary">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
}
