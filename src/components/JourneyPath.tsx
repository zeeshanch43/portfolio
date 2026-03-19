import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import type { JourneyData } from "@/components/JourneyCard";

interface JourneyPathProps {
  items: JourneyData[];
}

const JourneyPath = ({ items }: JourneyPathProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-12" id="journey-path">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display tracking-wide mb-3"
        >
          My Journey Path
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-muted-foreground mb-10 max-w-2xl"
        >
          A quick timeline of key moments. The line fills as you scroll through each milestone.
        </motion.p>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-2.5 md:left-3 top-1 bottom-1 w-1 rounded-full bg-border/70" />
          <motion.div
            aria-hidden
            className="absolute left-2.5 md:left-3 top-1 bottom-1 w-1 rounded-full origin-top bg-gradient-to-b from-primary via-primary/90 to-primary/30 shadow-[0_0_18px_hsl(var(--primary)/0.45)]"
            style={{ scaleY: progress }}
          />

          <div className="space-y-5">
            {items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative rounded-xl border border-border/70 bg-card/70 backdrop-blur-sm p-4 md:p-5"
              >
                <div className="absolute -left-[1.58rem] md:-left-[1.72rem] top-5 h-6 w-6 rounded-full border-2 border-primary/80 bg-background flex items-center justify-center text-[11px]">
                  {item.icon}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 py-1">
                    {item.year}
                  </span>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyPath;