import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SkillData {
  name: string;
  icon: string;
  level: string;
  description: string;
  projects: string[];
}

interface SkillCardProps {
  skill: SkillData;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const isImageIcon =
    skill.icon.includes(".png") ||
    skill.icon.includes(".jpg") ||
    skill.icon.includes(".jpeg") ||
    skill.icon.includes(".svg") ||
    skill.icon.startsWith("/") ||
    skill.icon.startsWith("http");
  const isFastApi = skill.name.toLowerCase() === "fastapi";

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className="flex-shrink-0 w-40 md:w-48 bg-card rounded-lg overflow-hidden cursor-pointer group"
    >
      <div className="aspect-square flex items-center justify-center text-5xl transition-colors duration-300">
        {isImageIcon ? (
          <div className="w-full h-full p-2 flex items-center justify-center bg-white">
            <img
              src={skill.icon}
              alt={skill.name}
              className={cn(
                "w-full h-full object-contain",
                isFastApi && "scale-[1.8]"
              )}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-xl border border-border flex items-center justify-center text-foreground">
            {skill.icon}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm">{skill.name}</h3>
        <p className="text-xs text-primary">{skill.level}</p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{skill.description}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
