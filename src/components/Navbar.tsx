import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "@/assets/zeeshan-profile.jpeg";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Featured", href: "#featured" },
  { label: "Journey", href: "#journey-path" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-3.5 transition-colors duration-300 relative ${
        scrolled
          ? "bg-background/92 backdrop-blur-sm"
          : "bg-gradient-to-b from-background/95 via-background/60 to-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1500px] flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-6 md:gap-10 min-w-0">
          <a href="#" className="text-sm md:text-base font-display text-primary tracking-[0.08em] leading-none whitespace-nowrap flex-shrink-0">
            ZEESHAN AHMAD CH
          </a>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm xl:text-base font-medium font-sans text-foreground/85 whitespace-nowrap overflow-hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 flex items-center text-foreground">
            <img
              src={profileImage}
              alt="Zeeshan Ahmad avatar"
              className="w-7 h-7 md:w-9 md:h-9 rounded object-cover"
            />
          </div>
        </div>

      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-b from-background/55 to-transparent" />
    </motion.nav>
  );
};

export default Navbar;
