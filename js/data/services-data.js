/**
 * SERVICES PAGE — Data Source
 * ===========================
 * Edit this file to update all Services page content.
 * Future: replace with a PHP endpoint or database query.
 */

const SERVICES_DATA = {

  // ── Service Offerings ────────────────────────────────
  offerings: [
    {
      icon:        "fas fa-laptop-code",
      title:       "Custom Websites",
      description: "Responsive, fast, and SEO-friendly websites tailored exactly to your brand's needs — no generic templates, just clean custom code.",
      aosDelay:    "100",
    },
    {
      icon:        "fab fa-react",
      title:       "Web Applications",
      description: "Interactive, scalable Single Page Applications (SPAs) built with React — fast, dynamic, and built to grow with your business.",
      aosDelay:    "200",
    },
    {
      icon:        "fas fa-database",
      title:       "Backend & Database Systems",
      description: "Full-stack systems built with PHP, Laravel, and SQL — from database design to API development, fully connected and production-ready.",
      aosDelay:    "300",
    },
    {
      icon:        "fas fa-paint-roller",
      title:       "UI/UX Implementation",
      description: "Turning Figma designs into pixel-perfect, accessible, and beautifully animated code that works seamlessly across all devices.",
      aosDelay:    "400",
    },
  ],

  // ── My Process Steps ────────────────────────────────
  process: [
    {
      number:      1,
      title:       "Discovery",
      description: "We discuss your goals, target audience, and project requirements. We make sure we are a perfect fit to work together.",
      aosDir:      "fade-left",
      aosDelay:    "100",
    },
    {
      number:      2,
      title:       "Planning & Design Check",
      description: "I review wireframes and designs, providing technical feedback before finalizing the structural roadmap.",
      aosDir:      "fade-right",
      aosDelay:    "200",
    },
    {
      number:      3,
      title:       "Development",
      description: "I write clean, modular, and performance-optimized code, keeping you updated with weekly staging links.",
      aosDir:      "fade-left",
      aosDelay:    "300",
    },
    {
      number:      4,
      title:       "Launch & Support",
      description: "Thorough testing across browsers, deployment to production, and 1 month of post-launch bug-fixing support.",
      aosDir:      "fade-right",
      aosDelay:    "400",
    },
  ],

  // ── Testimonials ─────────────────────────────────────
  testimonials: [
    {
      name:     "Noha Azzam, MBA",
      role:     "Leadership Coach | Social Impact | G100 Egypt Country Chair",
      relation: "Mahmoud's Mentor",
      quote:    "I had the pleasure of mentoring Mahmoud, a highly motivated and talented Front-End Engineer. From day one, he demonstrated a strong grasp of modern web technologies, clean code practices, and an impressive attention to detail in building user interfaces. Mahmoud approaches challenges with curiosity and dedication, consistently delivering high-quality work and collaborating effectively with peers. I'm confident he will be a valuable asset to any team and continue to grow as a standout developer.",
      icon:     "fab fa-linkedin",
    },
  ],

  // ── FAQ ──────────────────────────────────────────────
  faq: [
    {
      question: "Do you provide hosting and domain names?",
      answer:   "While I primarily focus on development, I can guide you through purchasing your domain and setting up hosting (like Vercel, Netlify, or Hostinger) to ensure your app is deployed successfully.",
    },
    {
      question: "What if I need changes after the project is delivered?",
      answer:   "I provide 1 month of free post-launch support to fix any bugs. For new features or significant changes, we can arrange an hourly maintenance contract ($25/hr).",
    },
    {
      question: "How do we communicate during the project?",
      answer:   "I prefer async communication via Email or WhatsApp. I also provide weekly progress updates and staging links so you can track the development in real-time.",
    },
    {
      question: "Can you build a full system with a database?",
      answer:   "Yes! I build complete full-stack systems using PHP, Laravel, and MySQL — from database design and backend logic to the front-end UI. Check the estimator below to get a rough price.",
    },
  ],

  // ── Project Estimator ────────────────────────────────
  estimator: {
    groups: [
      {
        id:       "opt-type",
        question: "1. What type of project is it?",
        options:  [
          { icon: "fas fa-file-alt",  label: "Landing Page",    value: 100,  active: true  },
          { icon: "fas fa-sitemap",   label: "Multi-page Site",  value: 300,  active: false },
          { icon: "fas fa-rocket",    label: "Web App / SaaS",   value: 600,  active: false },
        ],
      },
      {
        id:       "opt-design",
        question: "2. Do you have the design ready?",
        options:  [
          { icon: "fab fa-figma",          label: "Yes (Figma)",         value: 0,   active: true  },
          { icon: "fas fa-pencil-ruler",   label: "No, I need UI assistance", value: 100, active: false },
        ],
      },
      {
        id:       "opt-backend",
        question: "3. Do you need a backend / database?",
        options:  [
          { icon: "fas fa-code",     label: "No — Frontend Only",  value: 0,   active: true  },
          { icon: "fas fa-database", label: "PHP + MySQL",          value: 150, active: false },
          { icon: "fas fa-server",   label: "Laravel + Full API",   value: 300, active: false },
        ],
      },
      {
        id:       "opt-timeline",
        question: "4. How fast do you need it?",
        options:  [
          { icon: "fas fa-calendar-alt", label: "Flexible (Standard)", value: 1,   active: true  },
          { icon: "fas fa-bolt",         label: "Rush (+50% fee)",      value: 1.5, active: false },
        ],
      },
    ],
  },
};
