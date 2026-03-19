import type { ProjectData } from "@/components/ProjectCard";
import type { SkillData } from "@/components/SkillCard";
import type { JourneyData } from "@/components/JourneyCard";
import gamersDenImg from "../../New folder/gamers den.jpg";
import usmanFarmImg from "../../New folder/usman farm.jpg";
import searchAndSelectImg from "../../New folder/dsa.jpg";
import solitareImg from "../../New folder/solitare.jpg";
import monopolyImg from "../../New folder/Monopoly Man.jpg";
import reactIcon from "../../svgs/react.svg";
import javascriptIcon from "../../svgs/javascript.svg";
import pythonIcon from "../../svgs/python.svg";
import htmlIcon from "../../svgs/html5.svg";
import cssIcon from "../../svgs/css.svg";
import mysqlIcon from "../../svgs/mysql.svg";
import djangoIcon from "../../svgs/django.svg";
import postmanIcon from "../../svgs/postman.svg";
import gitIcon from "../../svgs/git.svg";
import githubIcon from "../../svgs/github.svg";
import pygameIcon from "../../svgs/pyg.svg";
import pydanticIcon from "../../svgs/pydantic.svg";

export const projects: ProjectData[] = [
  {
    id: "1",
    title: "CLI Management System",
    description: "First-term CLI project focused on management workflows.",
    longDescription: "A command-line management system built in C++ during first term, designed to handle structured data and basic management operations.",
    technologies: ["C++"],
    thumbnail: gamersDenImg,
    github: "https://github.com/zeeshanch43/gamersden",
    year: "2024",
    category: "CLI",
  },
  {
    id: "2",
    title: "Usman Farm Management System",
    description: "Farm management project with a practical data-focused workflow.",
    longDescription: "Usman Farm is a semester project built around farm operations and records using C# and SQL.",
    technologies: ["C#", "SQL"],
    thumbnail: usmanFarmImg,
    github: "https://github.com/zeeshanch43/usmanfarm",
    year: "2024",
    category: "Management System",
  },
  {
    id: "3",
    title: "DSA Project",
    description: "Search and select project developed as a DSA-focused implementation.",
    longDescription: "A DSA project implementing search and selection concepts using Python and Pygame.",
    technologies: ["Python", "Pygame"],
    thumbnail: searchAndSelectImg,
    github: "https://github.com/zeeshanch43/Dsaproject",
    year: "2024",
    category: "DSA",
  },
  {
    id: "4",
    title: "Solitare",
    description: "Classic solitare game implementation.",
    longDescription: "A playable Solitare game project with game logic and interactive UI flow.",
    technologies: ["Python", "Pygame"],
    thumbnail: solitareImg,
    github: "https://github.com/zeeshanch43/solitaregame",
    year: "2025",
    category: "Game",
  },
  {
    id: "5",
    title: "Monopoly",
    description: "Monopoly game project based on board-game mechanics.",
    longDescription: "A Monopoly game implementation featuring turn-based gameplay and core board rules.",
    technologies: ["Python", "Pygame"],
    thumbnail: monopolyImg,
    github: "https://github.com/zeeshanch43/monopoly",
    year: "2025",
    category: "Game",
  },
];

export const featuredProjects = projects.filter((p) =>
  ["2"].includes(p.id)
);

export const skills: SkillData[] = [
  { name: "React", icon: reactIcon, level: "Advanced", description: "Building modern component-driven user interfaces", projects: ["CLI Management System", "Usman Farm"] },
  { name: "JavaScript", icon: javascriptIcon, level: "Advanced", description: "Core language for interactive web development", projects: ["Usman Farm"] },
  { name: "Python", icon: pythonIcon, level: "Intermediate", description: "Used for backend services and game logic", projects: ["DSA Project", "Solitare", "Monopoly"] },
  { name: "HTML", icon: htmlIcon, level: "Advanced", description: "Semantic structure for accessible web pages", projects: ["Usman Farm"] },
  { name: "CSS", icon: cssIcon, level: "Advanced", description: "Responsive layouts and polished visual styling", projects: ["Usman Farm"] },
  { name: "MySQL", icon: mysqlIcon, level: "Intermediate", description: "Database development and data modeling", projects: ["Usman Farm"] },
  { name: "Django", icon: djangoIcon, level: "Intermediate", description: "Building robust web backends with Python", projects: ["DSA Project"] },
  { name: "Postman", icon: postmanIcon, level: "Advanced", description: "API testing, validation, and collaboration", projects: ["All Projects"] },
  { name: "Git", icon: gitIcon, level: "Advanced", description: "Version control and team collaboration workflows", projects: ["All Projects"] },
  { name: "GitHub", icon: githubIcon, level: "Advanced", description: "Repository hosting and project collaboration", projects: ["All Projects"] },
  { name: "Pygame", icon: pygameIcon, level: "Intermediate", description: "Game and interaction development in Python", projects: ["DSA Project", "Solitare", "Monopoly"] },
  { name: "Pydantic", icon: pydanticIcon, level: "Beginner", description: "Data validation and schema modeling in Python", projects: ["DSA Project"] },
];

export const journey: JourneyData[] = [
  { title: "Started University", subtitle: "UET Lahore", year: "2024", description: "Started university.", icon: "🎓" },
  { title: "Director", subtitle: "GDGoC UET Lahore", year: "2025", description: "Director at GDGoC UET Lahore campus, the Google developer group.", icon: "🌐" },
  { title: "Director", subtitle: "Job Skill Share UET Lahore", year: "Next", description: "Director at Job Skill Share UET Lahore campus.", icon: "💼" },
];
