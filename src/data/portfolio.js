export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
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
    technologies: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
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

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend and Node.js backend",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/yourusername/project1",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "/images/project2.jpg",
    technologies: ["React", "Firebase", "Material-UI"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/yourusername/project2",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts",
    image: "/images/project3.jpg",
    technologies: ["JavaScript", "API Integration", "Chart.js"],
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/yourusername/project3",
    featured: false
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
