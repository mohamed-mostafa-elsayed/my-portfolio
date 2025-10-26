import { href } from "react-router-dom";

export const personalInfo = {
  name: "Mohammed Mostafa",
  title: "Full Stack Developer",
  email: "mohammed.mostafa.elsied@gmail.com",
  phone: "+201097210066",
  location: "Cairo, Egypt",
  bio: "Passionate developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications.",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    portfolio: "https://yourportfolio.com"
  }
};

export const skills = [
  {
    category: "Frontend",
    technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack", "Vite"]
  }
];


export const experience = [
  {
    id: 1,
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
    description: "Led development of user-facing features using React and TypeScript. Improved application performance by 40%.",
    technologies: ["React", "TypeScript", "GraphQL"]
  },
  {
    id: 2,
    company: "Startup XYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Built and maintained web applications using modern JavaScript frameworks. Collaborated with design team to implement pixel-perfect UIs.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL"]
  }
];

export const education = [
  {
    id: 1,
    institution: "University Name",
    degree: "Bachelor of Science in Computer Science",
    duration: "2016 - 2020",
    description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, payments, and admin dashboard",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-[var(--primary)] to-[var(--secondary)]",
    hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team features",
    tags: ["React", "Firebase", "Tailwind"],
    gradient: "from-[var(--secondary)] to-[var(--accent)]",
     hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
  {
    title: "Portfolio Generator",
    description: "Tool to create beautiful portfolio websites with customizable templates",
    tags: ["React", "TypeScript", "CSS"],
    gradient: "from-[var(--accent)] to-[var(--primary)]",
     hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasts, maps, and location-based data",
    tags: ["React", "API", "Charts"],
    gradient: "from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]",
     hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
  {
    title: "Social Media App",
    description: "Modern social platform with posts, comments, and real-time messaging",
    tags: ["React", "GraphQL", "PostgreSQL"],
    gradient: "from-[var(--secondary)] to-[var(--primary)]",
     hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts, nutrition, and progress with beautiful analytics",
    tags: ["React", "Charts", "PWA"],
    gradient: "from-[var(--accent)] via-[var(--primary)] to-[var(--secondary)]",
     hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
];
