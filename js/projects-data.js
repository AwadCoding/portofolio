// =============================================
// PROJECTS DATA — Single Source of Truth
// Add new projects at the END of the array.
// The home page auto-shows the last 3 projects.
// =============================================

const PROJECTS = [
  {
    id: "QuizSystem",
    title: "SCCI Quiz System — Real-Time Digital Quiz Platform",
    shortDesc: "Independently designed and built a complete digital quiz system with Firebase, replacing manual paper-based quizzes with real-time tracking, admin controls, and a competitive leaderboard.",
    image: "Projects/quiz-system.png",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    liveUrl: "https://awadcoding.github.io/SCCI-Quiz/",
    githubUrl: "https://github.com/AwadCoding/SCCI-Quiz",
    modal: {
      overview: "A digital interactive platform designed to replace traditional paper-based quiz activities used during workshop sessions. It introduces a structured, engaging, and competitive environment where participants can test their knowledge, while organizers can manage questions and track performance in real time.",
      problem: "Quizzes were conducted manually — questions written on paper and distributed randomly. No structured way to manage or reuse questions. No tracking of participant performance. No competitive system (no rankings or leaderboard). The process felt unorganized and inconsistent, resulting in a less engaging learning experience.",
      features: [
        "Workshop-Based Quiz System — Each workshop has its own question set, dynamically loaded based on selection",
        "Admin Panel — Add questions, define multiple answers, select correct answer, and assign to specific workshops",
        "Real-Time Quiz Experience — Interactive UI with instant answer validation and smooth flow",
        "Leaderboard System — Ranks participants based on performance and displays top performers dynamically",
        "Cloud-Based Database — Built with Firebase for real-time data handling, storage, and scalability"
      ],
      role: "Sole developer — designed and built the entire system independently from idea to deployment. Planned the system structure and data flow, built both the user experience and admin logic, and integrated Firebase for real-time functionality.",
      achievements: [
        "Built a complete system independently from concept to live deployment",
        "Integrated Firebase for real-time data syncing across quiz sessions",
        "Designed a flexible data structure supporting multiple workshops and question sets",
        "Created a smooth, framework-free UX with vanilla JavaScript",
        "Deployed and used as a live activity during real SCCI workshop sessions"
      ],
      impact: "Replaced the manual quiz process with a structured digital system. Increased participant engagement through gamification and competition. Enabled organizers to manage and reuse questions efficiently. Used as a live interactive activity during real workshop sessions.",
      stats: [
        { value: "1", label: "Solo Developer" },
        { value: "100%", label: "Built from Scratch" },
        { value: "Live", label: "Used in Real Sessions" },
        { value: "Real-Time", label: "Firebase Sync" }
      ]
    }
  },
  {
    id: "scci-platform",
    title: "SCCI Season'26 Platform — Full Academic Management System",
    shortDesc: "Designed and led the development of a full-stack web platform to manage the entire SCCI academic season, connecting ~300 users through a unified system for task management, submissions, and evaluation.",
    image: "Projects/scci-platform.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "SEO"],
    liveUrl: "https://scci26.site",
    githubUrl: "https://github.com/mahmoud530/SCCI-Season26-Platform",
    modal: {
      overview: "A full-stack web system designed to manage the entire academic season of SCCI. Instead of relying on scattered manual processes (papers, chats), the platform centralizes everything into one structured digital system — connecting participants, members, and heads in a seamless workflow.",
      problem: "Tasks were shared manually via papers and chats. Submissions were unstructured and hard to track. Feedback was inconsistent or delayed. No centralized system for managing workshops. No clear visibility into participant progress. As a former participant, I experienced these issues firsthand and aimed to solve them.",
      features: [
        "Dual Dashboard System — Admin panel for task creation, review, and evaluation; Participant panel for submissions and progress tracking",
        "Complete Task Lifecycle — Create → Submit → Review → Evaluate → Track",
        "Submission & Evaluation System — Scoring (0–100) with written feedback and status tracking (Pending / Reviewed)",
        "Workflow Digitization — Replaced manual processes with a structured system, reducing confusion and improving organization",
        "SEO Optimization — Reached #1 position on Google for relevant queries within ~1 month"
      ],
      role: "Front-End Team Leader (team of 7 developers). Contributed across multiple core pages (Workshops, Crew, Participant Panel). Built key backend modules using PHP & MySQL including task management and submission systems. Focused on usability, simplicity, and real user needs.",
      achievements: [
        "Led a front-end team of 7 developers following SDLC methodology to deliver a complete production-ready system",
        "Built first backend modules using PHP & MySQL, including task management and submission systems",
        "Implemented SEO optimization — platform ranked #1 on Google search within one month",
        "Developed dual dashboards (Admin & Participant) enabling structured interaction between ~300 active users",
        "Contributed across multiple core pages while mentoring and supporting team development",
        "Recognized as \"Best Member of the Week — IT Committee\" for performance and impact"
      ],
      impact: "This project marked a major shift in SCCI's history (21+ years), being the first fully integrated digital system used to manage the entire academic season. The platform is now actively used and will be continued by future seasons, making it a long-term technical foundation for the organization.",
      stats: [
        { value: "~300", label: "Active Users" },
        { value: "7", label: "Team Members Led" },
        { value: "#1", label: "Google Ranking" },
        { value: "21+", label: "Years of SCCI — First Digital System" }
      ]
    }
  },
  {
    id: "card",
    title: "Awad Card — QR-Based Digital Portfolio Card",
    shortDesc: "Built a QR-powered digital card to centralize and share all professional links through a single scannable access point, turning a simple task into a reusable personal branding tool.",
    image: "Projects/project-mycard.png",
    tags: ["HTML", "CSS", "JavaScript", "QR Code"],
    liveUrl: "https://awadcoding.github.io/awad-card/",
    githubUrl: "https://github.com/AwadCoding/awad-card",
    modal: {
      overview: "A digital personal portfolio card designed to simplify how I share my professional presence. Instead of sending multiple links, the card provides a single access point to all platforms through a clean interface and a scannable QR code.",
      problem: "Sharing multiple links (GitHub, LinkedIn, portfolio, etc.) can be inefficient and unorganized, especially during networking events or professional introductions. There was no quick, centralized way to share everything at once.",
      features: [
        "QR Code Integration — Scan once to instantly access all professional links",
        "Centralized Links Hub — GitHub, LinkedIn, Portfolio, and more in one place",
        "Responsive & Minimal UI — Clean design optimized for mobile, tablet, and desktop",
        "Smooth CSS Animations — Micro-interactions and hover effects for a polished experience",
        "Lightweight & Fast — Ultra-fast loading with no frameworks or dependencies"
      ],
      role: "Sole developer — designed and built the entire project independently. Transformed a simple assignment into a complete personal branding tool with QR integration, focusing on usability and quick accessibility.",
      achievements: [
        "Designed and developed the project independently from concept to deployment",
        "Integrated QR code for instant access to all professional platforms",
        "Built a lightweight, framework-free solution with smooth CSS animations",
        "Converted a simple task into a reusable personal branding tool",
        "Actively used during events and networking for professional sharing"
      ],
      impact: "Simplified how I share my professional identity by replacing scattered links with a single scannable access point. Improved accessibility during events and networking, turning a basic task into a practical tool I use regularly.",
      stats: [
        { value: "1", label: "Solo Developer" },
        { value: "0", label: "Dependencies Used" },
        { value: "QR", label: "Scan & Access" },
        { value: "Active", label: "Used in Real Events" }
      ]
    }
  },
  {
    id: "edulearn",
    title: "EduLearn — React Graduation Project (ITI Code Camp)",
    shortDesc: "Led a team of 6 to build a React-based graduation project after 120 hours of intensive training, achieving full evaluation score through structured preparation and technical mentoring.",
    image: "Projects/project-edulearn.png",
    tags: ["React", "React Router", "JavaScript", "CSS", "HTML"],
    liveUrl: "https://awadcoding.github.io/EduLearn/index.html",
    githubUrl: "https://github.com/AwadCoding/EduLearn-React-ITI",
    modal: {
      overview: "A front-end web application developed using React.js as part of the ITI training program. Built as a graduation requirement after completing an intensive 120-hour training, focusing on modern front-end development, component architecture, and team collaboration.",
      problem: "The goal was to apply newly learned React concepts in a real project while working in a team environment and preparing for a formal technical evaluation by ITI instructors.",
      features: [
        "Component-Based Architecture — Built with reusable React components and clean state management",
        "Dynamic Routing — React Router for seamless multi-page navigation",
        "Responsive Design — Optimized layout using CSS Grid and Flexbox across all devices",
        "Performance Optimized — Lazy loading and optimized rendering for fast user experience",
        "Structured Codebase — Clean, maintainable, and well-organized project structure"
      ],
      role: "Selected as Team Leader (team of 6 members). Organized team workflow and task distribution. Supported team members in overcoming technical challenges. Led preparation sessions for the final presentation and trained the team on expected discussion questions.",
      achievements: [
        "Achieved full evaluation score during the final project presentation",
        "Led a team of 6 through a structured development workflow",
        "Trained and mentored team members on React concepts and technical discussion preparation",
        "Delivered a confident and well-prepared team performance in front of evaluators",
        "First experience working with a front-end framework (React.js)"
      ],
      impact: "Completed a full project within a structured 120-hour training program. Demonstrated the ability to lead, mentor, and deliver under formal evaluation conditions. Improved team confidence and presentation performance, resulting in a full score.",
      stats: [
        { value: "6", label: "Team Members Led" },
        { value: "120h", label: "Training Program" },
        { value: "Full", label: "Evaluation Score" },
        { value: "1st", label: "Framework Experience" }
      ]
    }
  },
  {
    id: "elkebir",
    title: "Elkebir Awi — Award-Winning Smart Elderly Care Startup",
    shortDesc: "Led a team of 5 to build a smart care startup platform for the elderly in just 7 days, winning Best Startup, Best Participant, and Best Team Leader awards at SCCI Season'25.",
    image: "Projects/project-elkeberawi.png",
    tags: ["HTML", "CSS", "JavaScript", "Accessibility", "Responsive"],
    liveUrl: "https://awadcoding.github.io/Elkebir_awi/",
    githubUrl: "https://github.com/AwadCoding/Elkebir_awi",
    modal: {
      overview: "A startup web platform focused on providing smart care solutions for elderly users. Developed as part of a startup competition during SCCI Season'25, where multidisciplinary teams collaborated to build complete solutions within a limited timeframe.",
      problem: "Elderly care often lacks accessible digital solutions that help families monitor and support daily needs effectively. There was no simple, user-friendly platform that brings together monitoring, medication reminders, and emergency support in one place.",
      features: [
        "Responsive & Accessible UI — Clean layout with large fonts, clear contrast, and elderly-friendly design",
        "Smart Monitoring Concept — Dashboard for monitoring living spaces and daily activities",
        "Medication Reminder System — Scheduling and tracking medication for elderly users",
        "Emergency Support — Fall detection alerts and emergency notification concepts",
        "Integration-Ready Architecture — Structured to support future smart feature integrations"
      ],
      role: "Selected as Team Leader (team of 5 developers). Led the front-end development and coordinated with other workshop teams. Ensured timely delivery within a strict 1-week deadline. Focused on UI/UX, usability, and accessibility for elderly users.",
      achievements: [
        "🥇 Won Best Startup Award — SCCI Season'25",
        "⭐ Recognized as Best Participant — Divology Workshop",
        "🏅 Awarded Best Team Leader for performance and coordination",
        "Delivered a complete startup prototype in just 7 days",
        "Presented the project on stage in front of judges and participants",
        "First real experience leading a development team under pressure"
      ],
      impact: "Delivered a complete startup prototype in just 7 days, demonstrating strong teamwork and leadership under pressure. The project was presented on stage and won the Best Startup Award, proving the ability to turn ideas into working products quickly.",
      stats: [
        { value: "3", label: "Awards Won" },
        { value: "5", label: "Team Members Led" },
        { value: "7", label: "Days to Deliver" },
        { value: "1st", label: "Place — Best Startup" }
      ]
    }
  }
];
