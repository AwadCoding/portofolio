// =============================================
// PROJECTS DATA — Single Source of Truth
// Add new projects at the END of the array.
// The home page auto-shows the last 3 projects.
// =============================================

const PROJECTS = [
  {
    id: "scci",
    title: "High-Performance SCCI Platform",
    shortDesc: "Built a complete platform for managing SCCI activities and workshops with a focus on performance and smooth user experience.",
    image: "Projects/scci-platform.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://scci26.site",
    githubUrl: "https://github.com/mahmoud530/SCCI-Season26-Platform",
    modal: {
      overview: "A complete web platform built for managing the SCCI student activity (Season 26). The platform handles activity registration, workshop scheduling, and participant management with a clean, modern UI.",
      features: [
        "Responsive multi-page website with smooth navigation",
        "Optimized loading speed with lazy-loaded assets",
        "Interactive registration forms with validation",
        "Clean front-end architecture using modular CSS",
        "Cross-browser compatibility and mobile-first design"
      ],
      role: "Led the front-end development as an IT team member — built the complete UI structure, optimized performance, and ensured cross-device responsiveness."
    }
  },
  {
    id: "card",
    title: "Interactive Personal Card with Smooth Animations",
    shortDesc: "Designed and developed a modern interactive personal card with responsive layout and smooth UI animations.",
    image: "Projects/project-mycard.png",
    tags: ["HTML", "CSS", "JavaScript", "CSS Animations"],
    liveUrl: "https://awadcoding.github.io/awad-card/",
    githubUrl: "https://github.com/AwadCoding/awad-card",
    modal: {
      overview: "A modern, interactive digital business card showcasing personal information and social links. Features smooth CSS animations and a responsive layout that works beautifully on all screen sizes.",
      features: [
        "Lightweight and ultra-fast loading performance",
        "Smooth CSS animations and micro-interactions",
        "Responsive design for mobile, tablet, and desktop",
        "Clean and modern UI with attention to detail",
        "Social media integration with hover effects"
      ],
      role: "Full design and development — from wireframing the layout to implementing the final product with custom animations."
    }
  },
  {
    id: "edulearn",
    title: "Fast React Web App (EduLearn)",
    shortDesc: "Developed a responsive React application with reusable components and dynamic UI.",
    image: "Projects/project-edulearn.png",
    tags: ["HTML", "CSS", "JavaScript", "React", "React Router"],
    liveUrl: "https://awadcoding.github.io/EduLearn/index.html",
    githubUrl: "https://github.com/AwadCoding/EduLearn-React-ITI",
    modal: {
      overview: "An educational web application built with React as part of the ITI Code Camp. The app features a component-based architecture, dynamic routing, and a responsive interface designed for an optimal learning experience.",
      features: [
        "Built with React: reusable components and clean state management",
        "Dynamic routing with React Router for seamless navigation",
        "Performance-optimized rendering and lazy loading",
        "Responsive layout using CSS Grid and Flexbox",
        "Modern UI with consistent design system"
      ],
      role: "Sole developer — built the entire front-end from scratch using React, implemented component architecture, and applied performance best practices learned at ITI."
    }
  },
  {
    id: "elkebir",
    title: "Smart Care Platform for the Elderly (Elkebir Awi)",
    shortDesc: "Developed a smart care platform for the elderly with modern web technologies and responsive design.",
    image: "Projects/project-elkeberawi.png",
    tags: ["HTML", "CSS", "JavaScript", "Accessibility", "Responsive"],
    liveUrl: "https://awadcoding.github.io/Elkebir_awi/",
    githubUrl: "https://github.com/AwadCoding/Elkebir_awi",
    modal: {
      overview: "A smart web platform designed to improve elderly care through technology. The platform provides tools for monitoring living spaces, tracking medication schedules, and detecting falls — enhancing safety and quality of life for seniors.",
      features: [
        "Room monitoring dashboard with real-time status indicators",
        "Medication reminder system with scheduling",
        "Fall detection alerts and emergency notifications",
        "Responsive design optimized for caregivers on mobile",
        "Accessibility-focused UI with large fonts and clear contrast"
      ],
      role: "Front-end developer — designed and implemented the full user interface with a focus on accessibility and ease of use for elderly users and their caregivers."
    }
  }
];
