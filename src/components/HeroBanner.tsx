import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/zeeshan-profile.jpeg";

const HeroBanner = () => {
  return (
    <div className="relative h-[86vh] min-h-[620px] w-full overflow-hidden bg-[#04070b]">
      <img
        src={heroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(22,163,74,0.16),transparent_42%),linear-gradient(90deg,rgba(3,6,12,0.56)_0%,rgba(3,6,12,0.42)_40%,rgba(3,6,12,0.22)_62%,rgba(3,6,12,0.58)_100%)]" />
      <div className="absolute inset-0 hidden lg:block">
        <img
          src={profileImage}
          alt="Zeeshan Ahmad"
          className="absolute right-0 top-0 h-full w-[50%] object-cover object-[center_28%] opacity-84"
          style={{
            WebkitMaskImage: "linear-gradient(to left, black 72%, transparent 100%)",
            maskImage: "linear-gradient(to left, black 72%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 lg:hidden">
        <img
          src={profileImage}
          alt="Zeeshan Ahmad"
          className="w-full h-full object-cover object-[center_20%] opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,12,0.12)_0%,rgba(3,6,12,0.56)_52%,rgba(3,6,12,0.9)_100%)]" />
      </div>

      <div className="relative z-10 h-full px-6 md:px-12 pb-16 md:pb-24 flex items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-3xl"
        >
          <p className="inline-flex items-center rounded-full bg-primary/20 text-primary text-xs md:text-sm font-semibold uppercase tracking-widest px-3 py-1.5 mb-4">
            Problem Solver • Developer • Crickter
          </p>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.95] mb-4 text-white">
            ZEESHAN
            <br />
            AHMAD
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
            I build complete digital experiences from frontend to backend with clean, scalable, and reliable solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <Play className="w-5 h-5" />
              View Portfolio
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-full font-semibold transition-colors border border-white/20"
            >
              <Info className="w-5 h-5" />
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
