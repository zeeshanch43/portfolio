import { motion } from "framer-motion";

export interface JourneyData {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  icon: string;
}

interface JourneyCardProps {
  item: JourneyData;
}

const JourneyCard = ({ item }: JourneyCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="flex-shrink-0 w-64 md:w-72 bg-card rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center text-4xl">
        {item.icon}
      </div>
      <div className="p-4 space-y-1">
        <span className="text-xs text-primary font-semibold">{item.year}</span>
        <h3 className="font-semibold text-sm">{item.title}</h3>
        <p className="text-xs text-muted-foreground">{item.subtitle}</p>
        <p className="text-xs text-muted-foreground/80 mt-2 line-clamp-3">{item.description}</p>
      </div>
    </motion.div>
  );
};

export default JourneyCard;
