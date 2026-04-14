import { ProfileData } from './types';

export const USER_DATA: ProfileData = {
  name: "Vasu Saini",
  title: "Junior Full-Stack Engineer & AI Specialist",
  bio: "Passionate technologist dedicated to building elegant, scalable solutions at the intersection of web development and artificial intelligence. Currently focusing on generative AI integrations and high-performance React architectures.",
  email: "vasu.saini@example.com",
  github: "github.com/vasusaini",
  linkedin: "https://www.linkedin.com/in/vasu-saini-501137308?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  education: [
    {
      institution: "Moradabad Institute of Technology",
      degree: "B.Tech in Computer Science",
      period: "2023 - 2027",
      location: "Moradabad, UP",
      cgpa: "7.43/10.0",
      achievements: ["Specialization in Artificial Intelligence", "Thesis on Transformer-based Architecture Optimization"]
    }
  ],
  experience: [
    {
      company: "TechNova Solutions",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description: [
        "Led a team of 5 in developing a next-gen dashboard utilizing React 18 and Gemini AI.",
        "Optimized database queries reducing latency by 45% across core services.",
        "Implemented rigorous CI/CD pipelines using GitHub Actions and Terraform."
      ]
    },
    {
      company: "InnovateLabs",
      role: "Frontend Developer Intern",
      period: "2021 - 2022",
      description: [
        "Developed reusable UI components for a cross-platform mobile app using React Native.",
        "Collaborated with UX designers to implement pixel-perfect responsive layouts."
      ]
    }
  ],
  skills: [
    { name: "React / Next.js", level: 95, category: "Technical" },
    { name: "TypeScript", level: 90, category: "Technical" },
    { name: "Node.js", level: 85, category: "Technical" },
    { name: "Python / AI", level: 80, category: "Technical" },
    { name: "Cloud Architecture", level: 75, category: "Technical" },
    { name: "Communication", level: 90, category: "Soft" },
    { name: "Problem Solving", level: 95, category: "Soft" },
    { name: "Leadership", level: 85, category: "Soft" }
  ],
  projects: [
    {
      title: "Omni-Sense AI",
      description: "AI-powered personal assisstant designed to automate everyday digital task.",
      tags: ["React", "Gemini API", "Node.js"],
      link: "#"
    },
    {
      title: "Quantum Ledger",
      description: "A secure, decentralized accounting system built with high-concurrency Rust and React.",
      tags: ["Rust", "Wasm", "Tailwind"],
      image: "https://picsum.photos/seed/ledger/600/400",
      link: "#"
    }
  ],
  academicMetrics: [
    { subject: "Algorithms", grade: 98 },
    { subject: "AI/ML", grade: 95 },
    { subject: "Systems", grade: 92 },
    { subject: "Database", grade: 94 },
    { subject: "UI/UX", grade: 90 },
    { subject: "Security", grade: 88 }
  ],
  certifications: [
    {
      title: "Office Master Certificate",
      issuer: "Office Master",
      date: "2026",
      credentialId: "officemaster-certificate",
      link: "/certificates/officemaster.certificate.pdf",
      skills: ["Productivity Tools", "Documentation", "Digital Office Skills"]
    },
    {
      title: "Data to Dashboards - PowerBI & Tableau in 90 Minutes",
      issuer: "GUVI | HCL",
      date: "2026",
      credentialId: "7ag7c0JA71X1423Y7G",
      link: "/certificates/guvi-hcl-certificate.png",
      skills: ["Power BI", "Tableau", "Data Visualization"]
    },
    {
      title: "JP Morgan Chase & Co.",
      issuer: "JP Morgan Chase & Co.",
      date: "2026",
      credentialId: "E6McHJDKsQYh79moz",
      link: "/certificates/completion-certificate.pdf",
      skills: ["Certification", "Course Completion", "Professional Development"]
    },
    {
      title: "Tata Forage Certificate",
      issuer: "Tata Forage",
      date: "2026",
      credentialId: "tata-forage",
      link: "/certificates/tata-forage.pdf",
      skills: ["Virtual Experience", "Professional Development", "Industry Exposure"]
    },
    {
      title: "Certificate on Completion of Python 3.4.3 Training",
      issuer: "Python Training Program",
      date: "2026",
      credentialId: "python-3-4-3-training",
      link: "/certificates/VASU-SAINI-Participant-Certificate.pdf",
      skills: ["Python", "Scripting", "Software Development"]
    }
  ]
};
