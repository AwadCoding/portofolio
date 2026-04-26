/**
 * HOME PAGE — Data Source
 * =======================
 * Edit this file to update all Home page dynamic content.
 * Future: replace with a PHP endpoint or database query.
 */

const HOME_DATA = {

  // ── Hero ─────────────────────────────────────────────
  hero: {
    name:        "Mahmoud Awad",
    tagline:     "🚀 Full-Stack Web Developer — Fast & Results-Driven",
    description: "I build fast, responsive websites and full-stack web systems — from sleek front-ends to database-connected backends — delivering clean code and real results.",
    ctaText:     "View My Work",
    ctaHref:     "#projects",
    cvPath:      "assets/Mahmoud_Awad_CV.pdf",
  },

  // ── Skills Slider (Row 1) ────────────────────────────────────────
  skills: [
    { label: "C++",        icon: "fas fa-code",      color: "#00599C" },
    { label: "HTML5",      icon: "fab fa-html5",      color: "#E34F26" },
    { label: "CSS3",       icon: "fab fa-css3-alt",   color: "#1572B6" },
    { label: "JavaScript", icon: "fab fa-js",          color: "#F7DF1E" },
    { label: "React",      icon: "fab fa-react",       color: "#61DAFB" },
    { label: "PHP",        icon: "fab fa-php",         color: "#8892BE" },
    { label: "Laravel",    icon: "fab fa-laravel",     color: "#FF2D20" },
    { label: "MySQL",      icon: "fas fa-database",    color: "#4479A1" },
    { label: "Git",        icon: "fab fa-git-alt",     color: "#F05032" },
    { label: "Sass",       icon: "fab fa-sass",        color: "#CC6699" },
    { label: "REST APIs",  icon: "fas fa-plug",        color: "#64FFDA" },
    { label: "Team Leadership",    icon: "fas fa-users",  color: "#FF6B6B" },
    { label: "Project Management", icon: "fas fa-tasks",  color: "#4ECDC4" },
  ],

  // ── Tools Slider (Row 2) ──────────────────────────────────────────
  tools: [
    { label: "Notion",         icon: "fas fa-clipboard-list",       color: "#FFFFFF" },
    { label: "Figma",          icon: "fab fa-figma",                color: "#A259FF" },
    { label: "Slack",          icon: "fab fa-slack",                color: "#E01E5A" },
    { label: "VS Code",        icon: "fas fa-code",                 color: "#007ACC" },
    { label: "GitHub",         icon: "fab fa-github",               color: "#FFFFFF" },
    { label: "Claude AI",      icon: "fas fa-robot",                color: "#D4A574" },
    { label: "Claude Design",  icon: "fas fa-palette",              color: "#A78BFA" },
    { label: "Antigravity",    icon: "fas fa-atom",                 color: "#64FFDA" },
  ],

  // ── About Me Snippet ──────────────────────────────────
  about: {
    text: "I'm a Front-End Developer transitioning into Full-Stack Development, with hands-on experience building real-world web systems used by ~300 actual users. I specialize in creating responsive, user-focused interfaces and translating real problems into practical digital solutions — with experience leading teams of 5–7 developers, organizing workflows, and delivering under tight deadlines.",
    ctaText: "Learn More",
    ctaHref: "pages/about.html",
  },

  // ── Contact Info ──────────────────────────────────────
  contact: {
    email:    "mahmoud.awad.official@gmail.com",
    phone:    "+20 10 30 656 171",
    location: "Cairo, Egypt",
    socials: [
      { icon: "fab fa-github",   url: "https://github.com/AwadCoding",                title: "GitHub"   },
      { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/mahmoudawad11/",   title: "LinkedIn" },
      { icon: "fab fa-youtube",  url: "https://www.youtube.com/@awadcoding",          title: "YouTube"  },
    ],
  },

};
