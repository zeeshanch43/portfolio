import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  thumbnail: string;
  github?: string;
  liveDemo?: string;
  year?: string;
  category?: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpen(true)}
        className="flex-shrink-0 w-48 md:w-56 cursor-pointer rounded overflow-hidden bg-card group text-left"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-label={`Open details for ${project.title}`}
      >
        <div className="aspect-[2/3] bg-white overflow-hidden relative">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open ${project.title} on GitHub`}
              className="absolute top-2 right-2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 border border-white/20 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-3 space-y-2">
          <h3 className="font-semibold text-sm line-clamp-1">{project.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] leading-none px-2 py-1 rounded border border-primary/30 bg-background/70 text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && typeof document !== "undefined" && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 md:p-8"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl border border-border/60 max-w-5xl w-full h-[86vh] overflow-hidden shadow-2xl"
            >
              <div className="relative h-[52%] min-h-[260px] bg-muted">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <div className="flex items-center gap-2 mb-3">
                    {project.year && (
                      <span className="text-xs md:text-sm font-semibold bg-black/45 border border-white/20 text-white px-2 py-1 rounded">
                        {project.year}
                      </span>
                    )}
                    {project.category && (
                      <span className="text-xs md:text-sm bg-black/35 border border-white/20 text-white px-2 py-1 rounded">
                        {project.category}
                      </span>
                    )}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display text-white leading-none drop-shadow-lg">
                    {project.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 bg-black/55 border border-white/20 rounded-full p-2.5 hover:bg-black/80 transition-colors"
                  aria-label="Close project details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-[48%] overflow-y-auto p-5 md:p-7">
                <div className="grid gap-6 md:grid-cols-[1.25fr_1fr]">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors text-sm font-medium"
                      >
                        Close
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 bg-secondary hover:bg-accent text-secondary-foreground px-4 py-2 rounded-md transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" /> GitHub
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 border border-border hover:bg-accent text-foreground px-4 py-2 rounded-md transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
