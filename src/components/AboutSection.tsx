import { motion } from "framer-motion";
import profileImage from "@/assets/zeeshan-profile.jpeg";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-12 py-16"
    >
      <h2 className="text-3xl md:text-4xl font-display tracking-wide mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <img
          src={profileImage}
          alt="Zeeshan Ahmad profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-[center_24%] flex-shrink-0 border-2 border-primary/30"
        />
        <div className="space-y-4 max-w-2xl">
          <h3 className="text-xl font-semibold">ZEESHAN AHMAD CH</h3>
          <p className="text-primary text-sm font-medium">Full Stack Developer</p>
          <p className="text-muted-foreground leading-relaxed">
            I am a passionate Full Stack Developer who enjoys transforming ideas into complete digital experiences. From building responsive and engaging user interfaces to designing efficient backend systems and databases, I work across the entire development stack to create scalable and reliable applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I focus on writing clean, maintainable code and continuously learning new technologies to improve my craft. For me, development is not just about solving problems, it is about building solutions that are meaningful, efficient, and impactful.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">Problem Solver</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">Cricketer</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">Gamer</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
