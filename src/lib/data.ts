import type { SiteConfig, AboutData, Experience, Project, Skill, Achievement } from './types';

export const siteConfig: SiteConfig = {
  name: "Dhanush D",
  tagline: "I'm a passionate Full Stack Developer crafting efficient and user-friendly web applications, turning complex problems into elegant digital solutions.",
  contact: {
    email: "dhanushdharmalingam123@gmail.com",
    phone: "+91 6369471916",
    location: "Karur, Tamil Nadu, India",
  },
  links: {
    github: "https://github.com/dhanush-d-123",
    linkedin: "https://www.linkedin.com/in/dhanush-d-21b333249/",
  },
  navLinks: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ],
};

export const aboutData: AboutData = {
  summary: "A dedicated and detail-oriented Full Stack Developer with a passion for creating efficient and user-friendly web applications. Experienced in various technologies with a strong foundation in both front-end and back-end development.",
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "K Ramakrishnan College of Engineering",
      period: "2020 - 2024",
    },
  ],
  internship: [
    {
      role: "Full Stack Developer Intern",
      company: "The Sparks Foundation",
      period: "June 2023 - July 2023",
    },
  ],
};

export const experienceData: Experience[] = [
  {
    role: "Data Analyst (LiDAR & Video Annotation)",
    company: "Objectways Technologies",
    period: "May 2023 - Present",
    responsibilities: [
      "Led a team in annotating LiDAR and video data, achieving over 95% accuracy.",
      "Developed and implemented AI-powered automation to improve annotation efficiency.",
      "Mentored and trained new team members, ensuring high-quality standards.",
    ],
  },
  {
    role: "Analyst",
    company: "Objectways Technologies",
    period: "Feb 2023 - May 2023",
    responsibilities: [
      "Analyzed and processed large datasets to extract meaningful insights.",
      "Collaborated with cross-functional teams to define data requirements.",
      "Contributed to the development of data-driven strategies and solutions.",
    ],
  },
];

export const skillsData: Skill = {
  "Programming": ["Python", "Java", "SQL"],
  "Web Development": ["React", "Next.js", "Node.js", "HTML", "CSS"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "Version Control": ["GitHub"],
};

export const projectsData: Project[] = [
  {
    title: "Tensoract Annotation Tool",
    description: "A web-based tool for LiDAR and video data annotation, designed to streamline the data labeling process for machine learning models. Features collaborative tools and AI-assisted annotation.",
    techStack: ["React", "Node.js", "MongoDB", "Python", "Flask"],
    link: "https://github.com/dhanush-d-123/Tensoract-Annotation-Tool",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with Next.js and Tailwind CSS to showcase my skills, projects, and experience. Features a clean, modern design with light and dark modes.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/dhanush-d-123/portfolio",
  },
];

export const achievementsData: Achievement[] = [
  {
    title: "High Accuracy Annotation",
    description: "Consistently achieved and maintained over 95% accuracy in LiDAR and video annotation tasks.",
  },
  {
    title: "Team Leadership",
    description: "Successfully led and mentored a team of annotators, improving overall team productivity and quality.",
  },
  {
    title: "AI-Powered Improvements",
    description: "Developed and integrated AI-based automation scripts that significantly enhanced annotation speed and efficiency.",
  },
];
