import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const contacts = [
  { icon: Github, label: "GitHub", href: "https://github.com/zeeshanch43", color: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/zeeshan-ahmad-07251432a/", color: "hover:text-blue-400" },
  { icon: Mail, label: "Email", href: "mailto:shani43502@gmail.com", color: "hover:text-primary" },
  { icon: FileDown, label: "Resume", href: "#", color: "hover:text-green-400" },
];

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-12 py-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-display tracking-wide mb-4">Connect With Me</h2>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">
        Like what you see? Let's connect and create something amazing together.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        {contacts.map(({ icon: Icon, label, href, color }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className={`flex flex-col items-center gap-2 bg-card rounded-lg p-6 w-32 text-muted-foreground transition-colors ${color}`}
          >
            <Icon className="w-8 h-8" />
            <span className="text-sm font-medium">{label}</span>
          </motion.a>
        ))}
      </div>
      <div className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground">
        © {new Date().getFullYear()} ZEESHAN AHMAD CH. All rights reserved.
      </div>
    </motion.section>
  );
};

export default ContactSection;
