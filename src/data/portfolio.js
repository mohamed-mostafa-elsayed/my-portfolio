import { href } from "react-router-dom";

export const personalInfo = {
  name: "Mohammed Mostafa",
  title: "Full Stack Developer",
  email: "mohammed.mostafa.elsied@gmail.com",
  phone: "+201097210066",
  location: "Cairo, Egypt",
  bio: "Passionate developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications.",
  social: {
    github: "https://github.com/mohamed-mostafa-elsayed",
    linkedin: "https://www.linkedin.com/in/mohammed-mostafa-elsayed/",
    twitter: "https://x.com/mohammed_a2z",
    portfolio: "https://yourportfolio.com",
    whatsApp: "https://wa.link/9r1ww1"
  }
};

export const skills = [
  {
    category: "Frontend",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "Redux Toolkit",
      "Storybook",
      "Responsive Design",
      "RESTful APIs",
      "JSON",
      "Figma",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Django",
      "Spring Boot",
      "RESTful API Development",
      "MVC Architecture",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Database Design",
      "ORM (Hibernate, Django ORM, Sequelize)",
      "JWT Authentication",
      "Spring Security",
      "User Roles & Permissions",
      "CSRF/XSS Protection",
    ],
  },
  {
    category: "Tools & Others",
    technologies: [
      "Docker",
      "Git & GitHub",
      "Postman",
      "Nginx",
      "Linux Server Management",
      "CI/CD Basics",
    ],
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
    visiable:true,
    title: "Move App",
    description: "A simple web app to browse and discover movies with details like ratings, genres, and posters",
    tags: ["React", "Bootstrap"],
    gradient: "from-[var(--primary)] to-[var(--secondary)]",
    hrefDemo: "https://react-project-self.vercel.app/",
    hrefGitHub: "https://github.com/mohamed-mostafa-elsayed/movie-app",
  },
  {
    visiable:false,
    title: "Cofee Center",
    description: "A modern app for browsing, ordering, and enjoying your favorite coffee selections",
    tags: ["React", "Bootstrap", "Django", "PostgreSQL"],
    gradient: "from-[var(--secondary)] to-[var(--accent)]",
    hrefDemo: "",
    hrefGitHub: "https://github.com/mohamed-mostafa-elsayed/coffee-center-frontend",
  },
  {
    visiable:false,
    title: "TV OS",
    description: "A smart TV operating system for managing channels, apps, and live content seamlessly",
    tags: ["React", "RDK"],
    gradient: "from-[var(--accent)] to-[var(--primary)]",
    hrefDemo: "https://www.linkedin.com/company/ooro-os/posts/?feedView=all",
    hrefGitHub: "",
  },

  {
    visiable:false,
    title: "Mini Shell",
    description: "A lightweight command-line shell that executes basic Linux commands efficiently",
    tags: ["React", "RDK"],
    gradient: "from-[var(--accent)] to-[var(--primary)]",
    hrefDemo: "",
    hrefGitHub: "https://github.com/mohamed-mostafa-elsayed/simple_shell",
  },
  {
    visiable:false,
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasts, maps, and location-based data",
    tags: ["React", "API", "Charts"],
    gradient: "from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]",
    hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
  {
    visiable:false,
    title: "Social Media App",
    description: "Modern social platform with posts, comments, and real-time messaging",
    tags: ["React", "GraphQL", "PostgreSQL"],
    gradient: "from-[var(--secondary)] to-[var(--primary)]",
    hrefDemo: "https://www.google.com",
    hrefGitHub: "https://www.google.com",
  },
];
