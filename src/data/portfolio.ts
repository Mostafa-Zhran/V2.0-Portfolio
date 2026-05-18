import {
  Code2,
  Database,
  Globe,
  Wrench,
  GraduationCap,
  Trophy,
  Star,
  Medal,
  Server
} from "lucide-react";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Mostafa Zahran",
    role: "Computer Science Student & Full Stack .NET Dev",
    badge: "Full Stack .NET Developer",
    description: "I craft exceptional digital experiences with clean, efficient code. Currently pursuing Computer Science and mastering Full Stack .NET development.",
    stack: ["C#", "ASP.NET Core", "SQL Server", "HTML", "CSS", "JS"],
  },
  stats: [
    { value: "250+", label: "Problems Solved" },
    { value: "10+", label: "Technologies" },
    { value: "4+", label: "Certifications" },
    { value: "5+", label: "Projects" },
  ],
  about: {
    points: [
      {
        icon: GraduationCap,
        text: "I'm a passionate Computer Science student at Arish University with a strong focus on Full Stack .NET development and problem-solving."
      },
      {
        icon: Code2,
        text: "As a Full-Stack Developer, I specialize in building responsive and scalable web applications using the latest technologies and best practices."
      },
      {
        icon: Wrench,
        text: "Expertise in C#, ASP.NET Core, SQL Server, and modern web technologies — building efficient, maintainable, user-friendly solutions."
      }
    ]
  },
  education: [
    {
      title: "B.Sc. in Computer Science",
      org: "Arish University",
      date: "2023 — Present",
      desc: "Specializing in Software Engineering and Web Development"
    },
    {
      title: "Full Stack .NET Track",
      org: "Digital Egypt Pioneers",
      date: "Jul 2025 — Jan 2026",
      desc: "Comprehensive training in full-stack development with .NET ecosystem"
    },
    {
      title: "Machine Learning Track",
      org: "NTI — National Telecommunication Institute",
      date: "Aug 2025 — Sep 2025",
      desc: "Data preprocessing, model development, evaluation, and deployment"
    }
  ],
  achievements: [
    {
      icon: Trophy,
      title: "Codeforces Expert",
      desc: "Solved 250+ problems in competitive programming on Codeforces platform."
    },
    {
      icon: Star,
      title: "ICPC Participant",
      desc: "Participated in ICPC regional competitions, applying advanced algorithmic skills under pressure."
    },
    {
      icon: Medal,
      title: "Full Stack Certified",
      desc: "Completed comprehensive full-stack .NET training through Digital Egypt Pioneers initiative."
    }
  ],
  skills: [
    {
      category: "Backend Development",
      icon: Server,
      color: "from-cyber-cyan to-blue-500",
      tags: ["C#", "Entity Framwork", "Linq", "ASP.NET Core", "RestFull API", "Swagger OpenAPI", "SQL Server", "ADO.Net", "Dapper", "Web Security", "OAuth", "JWT Bearer Authentication", "ASP.NET Core Identity"]
    },
    {
      category: "Frontend Development",
      icon: Globe,
      color: "from-cyber-emerald to-green-500",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Vite"]
    },
    {
      category: "Tools & Concepts",
      icon: Database,
      color: "from-cyber-orange to-red-500",
      tags: [
        "Operating Systems",
        "OOP",
        "Data Structures",
        "Algorithms",
        "Git",
        "GitHub",
        "VS Code",
        "Visual Studio",
        "SSMS",
        "Vercel",
        "Cursor",
        "Windsurf",
        "Networking",
        "C++",
        "Python",
        "Machine Learning",
        "AI"
      ]
    }
  ],
  certifications: [
    {
      title: "Full Stack .NET Development",
      issuer: "Digital Egypt Pioneers Initiative",
      date: "Issued: 2025",
      desc: "Comprehensive full-stack development covering ASP.NET Core, SQL Server, EF Core, and modern web technologies.",
      link: "https://drive.google.com/file/d/1qpDOkKtN22h34tzetIE40tLoX8Tq_2x_/view?usp=drive_link"
    },
    {
      title: "Machine Learning Track",
      issuer: "NTI — National Telecom Institute",
      date: "Aug 2025 — Sep 2025",
      desc: "Training in ML algorithms, data preprocessing, model evaluation and deployment for real-world applications.",
      link: "https://drive.google.com/file/d/13R2uSCJj4nW3tNaZpoUliNhMvrqBy8Ej/view?usp=drive_link"
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "NVIDIA",
      date: "Issued: August 2025",
      desc: "Hands-on training in neural networks, CNNs, model optimization, and deployment for computer vision and NLP.",
      link: "https://drive.google.com/file/d/1-5Vc5GA7xCU1FwcYFgpXkhk9awa7yoWv/view"
    },
    {
      title: "Soft Skills & CV Writing",
      issuer: "ITIDA & Arish University",
      date: "Issued: February 2024",
      desc: "Practical training in CV writing, interview skills, and career development to boost employability.",
      link: "https://drive.google.com/file/d/1WoFHUjTkyhIQRaKjR7YwcfzB_cjJDrA-/view"
    }
  ],
  projects: [
    {
      title: "Mos3ef Healthcare Platform",
      desc: "A full-stack healthcare web application designed to connect patients with hospital services through a modern, scalable, and user-friendly digital platform. Built with a clean multi-layered .NET 8 backend architecture and a fast React frontend for seamless healthcare management and real-time interaction.",
      tags: [
        ".NET 8",
        "ASP.NET Core Web API",
        "Linq",
        "C#",
        "Entity Framwork",
        "SQL Server",
        "RESTFull API",
        "Swager OpenAPI"
      ],
      img: "Images/projects/mos3ef.png",
      link: "https://mos3ef-website.vercel.app/",
      github: "https://github.com/Mostafa-Zhran/Mos3ef-Backend"
    },
    {
      title: "QueryFlow Search Engine",
      desc: "A production-ready full-stack search engine featuring TF-IDF ranking, hybrid search capabilities, real-time indexing, and Wikipedia integration. Designed for high performance, scalability, and intelligent information retrieval using modern backend and frontend technologies.",
      tags: [
        "FastAPI",
        "React",
        "TypeScript",
        "PostgreSQL",
        "TF-IDF",
        "Search Engine",
        "REST API",
      ],
      img: "Images/projects/QueryFlow.png",
      link: "https://q-flow-three.vercel.app/",
    },
    {
      title: "Daleel Platform",
      desc: "A crowdsourced platform built to simplify navigating government and private services in Egypt through verified, community-driven guidance. Daleel provides step-by-step procedures, required documents, fees, and official locations while empowering users to validate and improve information collaboratively through an interactive contribution and reward system.",
      tags: [
        ".NET 8",
        "ASP.NET Core Web API",
        "Linq",
        "C#",
        "Entity Framwork",
        "SQL Server",
        "RESTFull API",
        "Swager OpenAPI"
      ],
      img: "Images/projects/daleel.png",
      link: "https://daleel2030.vercel.app/",
    },
    {
      title: "Personal Portfolio V3.0",
      desc: "Upgraded portfolio with refined design, smoother navigation and enhanced project showcases — highlights growth and new skills.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3", "Vite"],
      img: "Images/projects/V3.png",
      link: "#",
    },
    {
      title: "Sales Management Desktop App",
      desc: "All-in-one desktop solution to track customers, manage inventory, and generate reports with ease.",
      tags: ["C#", "WinForms", ".NET Core", "SQL Server", "Dapper"],
      img: "Images/projects/Sales App.png",
      link: "https://github.com/Mostafa-Zhran/Sales-Management-System-Desktop-app.git",
    },
    {
      title: "Breast Cancer Prediction System",
      desc: "An intelligent machine learning-powered healthcare system designed to analyze medical data and predict breast cancer risk at early stages. The platform integrates multiple ML algorithms to enhance prediction accuracy and support timely diagnosis through a simple and user-friendly web interface.",
      tags: [
        "Python",
        "Flask",
        "Machine Learning",
        "HTML",
        "CSS",
        "Healthcare AI",
        "Data Analysis",
        "4 ML Algorithms"
      ],
      img: "Images/projects/Cancer detection.png",
      link: "#",
    }
  ],
  socials: [
    { name: "Email", link: "mailto:mostafazahran724@gmail.com" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/mostafa-tamer-zahran/" },
    { name: "GitHub", link: "https://github.com/Mostafa-Zhran" },
    { name: "Codeforces", link: "https://codeforces.com/profile/mostafazahran724" },
    { name: "Codewars", link: "https://www.codewars.com/users/Mostafa%20Zahran" },
    { name: "Facebook", link: "https://www.facebook.com/mostafa.zaharn" }
  ]
};
