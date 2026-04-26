/**
 * ABOUT PAGE — Data Source
 * ========================
 * Edit this file to update all About page content.
 * Future: replace with a PHP endpoint or database query.
 */

const ABOUT_DATA = {

  // ── Skills ──────────────────────────────────────────
  skills: [
    { label: "HTML5",              icon: "fab fa-html5",      color: "#E34F26" },
    { label: "CSS3 & Sass",        icon: "fab fa-sass",       color: "#CC6699" },
    { label: "JavaScript (ES6+)",  icon: "fab fa-js",         color: "#F7DF1E" },
    { label: "React",              icon: "fab fa-react",      color: "#61DAFB" },
    { label: "PHP",                icon: "fab fa-php",        color: "#8892BE" },
    { label: "Laravel",            icon: "fab fa-laravel",    color: "#FF2D20" },
    { label: "SQL & Databases",    icon: "fas fa-database",   color: "#4479A1" },
    { label: "Git & GitHub",       icon: "fab fa-git-alt",    color: "#F05032" },
    { label: "REST APIs",          icon: "fas fa-plug",       color: "#64FFDA" },
    { label: "UI/UX Design",       icon: "fab fa-figma",      color: "#A259FF" },
    { label: "Team Leadership",    icon: "fas fa-users",      color: "#FF6B6B" },
    { label: "Project Management", icon: "fas fa-tasks",      color: "#4ECDC4" },
  ],

  // ── Tools & Technologies ─────────────────────────────
  tools: [
    { icon: "fab fa-figma",    label: "Figma" },
    { icon: "fab fa-github",   label: "Git & GitHub" },
    { icon: "fas fa-database", label: "MySQL & SQL" },
    { icon: "fab fa-php",      label: "PHP & Laravel" },
    { icon: "fab fa-react",    label: "React" },
    { icon: "fas fa-code",     label: "VS Code" },
    { icon: "fas fa-terminal", label: "Command Line" },
    { icon: "fas fa-robot",    label: "Claude AI" },
    { icon: "fas fa-palette",  label: "Claude Design" },
    { icon: "fas fa-atom",     label: "Antigravity" },
    { icon: "fas fa-clipboard-list", label: "Notion" },
  ],

  // ── Experience Timeline ──────────────────────────────
  experience: [
    {
      icon:        "fas fa-user-tie",
      title:       "Front-End Team Leader & Backend Developer – SCCI'26",
      description: "Led a team of 7 front-end developers to build and deploy a full academic management platform used by ~300 active users. Built first backend modules using PHP & MySQL. Implemented SEO that ranked the platform #1 on Google within one month.",
      link:        { url: "https://www.linkedin.com/posts/mahmoudawad11_a-new-chapter-im-truly-excited-for-i-activity-7386514225797595137-JS6d", text: "🔗 View LinkedIn Post" },
      aosDir:      "fade-left",
    },
    {
      icon:        "fas fa-trophy",
      title:       "Team Leader – Divology Startup, SCCI'25 (3 Awards)",
      description: "Led a team of 5 developers in a startup competition. Delivered a complete elderly care platform prototype in 7 days. Won <strong>Best Startup</strong>, <strong>Best Participant</strong>, and <strong>Best Team Leader</strong> awards.",
      link:        { url: "https://www.linkedin.com/posts/mahmoudawad11_scci25-divology-frontend-activity-7347717290332753921-wKLn", text: "🔗 View LinkedIn Post" },
      aosDir:      "fade-left",
    },
    {
      icon:        "fas fa-graduation-cap",
      title:       "React Team Leader – ITI Code Camp (120h Training)",
      description: "Led a team of 6 to build a React-based graduation project after 120 hours of intensive training. Mentored team members on React concepts and technical discussion preparation. Achieved full evaluation score.",
      link:        null,
      aosDir:      "fade-right",
    },
    {
      icon:        "fas fa-laptop-code",
      title:       "Freelance Web Developer",
      description: "Designed and developed responsive websites, landing pages, and full-stack web systems for individuals, startups, and student organizations — handling everything from UI design to database integration.",
      link:        null,
      aosDir:      "fade-right",
    },
    {
      icon:        "fas fa-graduation-cap",
      title:       "Front-End Trainee – Egypt FWD",
      description: "Completed hands-on projects as part of the FWD Web Development track, focusing on responsive design, JavaScript, and modern front-end best practices.",
      link:        null,
      aosDir:      "fade-left",
    },
    {
      icon:        "fas fa-book",
      title:       "Content Creator – Web Development",
      description: "Created educational content on web development — from HTML and CSS basics to building complete systems with PHP and Laravel — helping beginners take their first real steps in the field.",
      link:        null,
      aosDir:      "fade-right",
    },
  ],

  // ── Personal Skills ──────────────────────────────────
  personalSkills: [
    "Problem Solving & Logical Thinking",
    "Time Management & Goal Setting",
    "Creative Collaboration",
    "Copywriting & Communication Skills",
    "Adaptability & Continuous Learning",
    "Attention to Detail",
    "Team Leadership & Mentoring",
  ],
};
