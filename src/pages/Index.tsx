import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ContentRow from "@/components/ContentRow";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import JourneyPath from "@/components/JourneyPath";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { projects, featuredProjects, skills, journey } from "@/data/portfolioData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroBanner />

      <div className="-mt-16 relative z-10 space-y-2 pb-8">
        <ContentRow title="My Projects" id="projects" autoPlay>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ContentRow>

        <ContentRow title="Skills & Technologies" id="skills" autoPlay>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ContentRow>

        <ContentRow title="Featured Work" id="featured">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ContentRow>

        <JourneyPath items={journey} />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
