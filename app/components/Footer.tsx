import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* CTA Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left: Content */}
        <div className="bg-primary flex flex-col justify-center items-center text-center p-12 lg:p-20 relative overflow-hidden">
          <div className="z-10 flex flex-col items-center gap-6 max-w-md">
            <h2 className="text-4xl md:text-5xl font-light text-[#FFFBEA] tracking-tight leading-tight">
              Make every morning <br /> <span className="font-serif italic font-bold">effortless</span>
            </h2>
            <p className="text-[#FFFBEA]/80 text-lg">Subscribe once, and never run out of fresh coffee again.</p>

            <div className="my-8 relative w-48 h-48">
              {/* Illustration Placeholder - Using a coffee bag/cup image instead of the specific vector */}
              <img src="https://cdn-icons-png.flaticon.com/512/2935/2935413.png" alt="Coffee Subscription" className="w-full h-full object-contain filter drop-shadow-xl invert opacity-90" />
            </div>

            <button className="flex items-center gap-3 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
              Start my subscription <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative h-[400px] lg:h-auto">
          <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2677&auto=format&fit=crop" alt="Pour over coffee" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-[#111111] text-[#FFFBEA] px-6 py-16 md:px-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-bold tracking-widest uppercase text-white/50">Navigation</h3>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Subscription
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-bold tracking-widest uppercase text-white/50">Social</h3>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    X
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-bold tracking-widest uppercase text-white/50">Information</h3>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/80">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Consent
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 max-w-md lg:ml-auto">
            <h3 className="text-xl font-medium">Stories Brewed for You</h3>
            <p className="text-white/60 text-sm leading-relaxed">Get updates on our latest coffee releases, exclusive offers, and simple brewing secrets.</p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="relative border-b border-white/20 focus-within:border-white transition-colors">
                <input type="email" placeholder="Email" className="w-full bg-transparent py-3 pr-10 outline-none text-white placeholder-white/40 text-sm" />
                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              </div>
              <div className="flex items-start gap-3 mt-2 group cursor-pointer">
                <div className="w-4 h-4 rounded border border-white/40 flex items-center justify-center mt-0.5 group-hover:border-white transition-colors">{/* Checkbox simulated */}</div>
                <p className="text-xs text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                  I've read and agree to the <span className="text-white decoration-1 underline underline-offset-2">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Big Brand Text */}
        <div className="border-b border-white/10 pb-8 mb-8">
          <h1 className="text-[14vw] leading-[0.8] font-bold text-center tracking-tighter text-white select-none pointer-events-none">KOPI HADAM</h1>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm text-white/30 font-medium tracking-wide uppercase gap-4">
          <p>© 2026 | KOPI HADAM</p>
          <div className="flex gap-8">
            <p>Developed by</p>
            <p>Designed by </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
