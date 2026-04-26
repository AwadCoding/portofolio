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
      description: "Need a professional online presence? I build responsive, SEO-friendly websites tailored to your brand — no templates, just clean custom code that loads fast and looks great on every device.",
      aosDelay:    "100",
    },
    {
      icon:        "fab fa-react",
      title:       "Web Applications (React)",
      description: "Have a product idea that needs an interactive interface? I build scalable Single Page Applications (SPAs) with React — fast, dynamic, and built to grow with your business.",
      aosDelay:    "200",
    },
    {
      icon:        "fas fa-database",
      title:       "Backend & Database Systems",
      description: "Need user accounts, dashboards, or data management? I build full-stack systems with PHP, MySQL, and Laravel — from database design to API development, fully connected and production-ready.",
      aosDelay:    "300",
    },
    {
      icon:        "fas fa-paint-roller",
      title:       "UI/UX Implementation",
      description: "Have a Figma design but need it coded? I turn designs into pixel-perfect, accessible, and animated code that works seamlessly across all devices — exactly as you envisioned.",
      aosDelay:    "400",
    },
  ],

  // ── My Process Steps ────────────────────────────────
  process: [
    {
      number:      1,
      title:       "Free Consultation",
      description: "We start with a meeting (video call or chat) where I listen to your problem, understand your goals, and explain how I can help. No commitment — just a clear conversation.",
      aosDir:      "fade-left",
      aosDelay:    "100",
    },
    {
      number:      2,
      title:       "Proposal & Agreement",
      description: "Based on our discussion, I send you a clear proposal with scope, timeline, and pricing. We agree on everything before any work starts — no surprises.",
      aosDir:      "fade-right",
      aosDelay:    "200",
    },
    {
      number:      3,
      title:       "Development & Updates",
      description: "I write clean, modular code and share progress with you regularly through staging links. You see what's being built and can give feedback at any point.",
      aosDir:      "fade-left",
      aosDelay:    "300",
    },
    {
      number:      4,
      title:       "Launch & Support",
      description: "Thorough testing across browsers, deployment to production, and 1 month of post-launch support to fix any bugs. Your project is in safe hands.",
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
      link:     "https://www.linkedin.com/posts/mahmoudawad11_careercoaching-professionaldevelopment-students-activity-7371090313236475904-rZvs",
    },
  ],

  // ── FAQ ──────────────────────────────────────────────
  faq: [
    {
      question: "I have an idea but don't know where to start — can you help?",
      answer:   "Absolutely. That's exactly what the free consultation is for. I'll listen to your idea, ask the right questions, and help you figure out what you actually need — whether it's a simple landing page or a full system. No pressure, no commitment.",
    },
    {
      question: "How much does a project cost?",
      answer:   "It depends on the scope. A simple landing page starts around $100, while a full-stack system with a database can range from $300–$900+. Use the Project Estimator below to get a rough idea, or book a free consultation for an accurate quote.",
    },
    {
      question: "How long does it take to deliver?",
      answer:   "A typical landing page takes 3–5 days. A multi-page website takes 1–2 weeks. A full system with backend and database usually takes 2–4 weeks. We'll agree on a clear timeline before starting.",
    },
    {
      question: "Will I be able to see the progress?",
      answer:   "Yes! I manage every project through a shared Notion board where you can track tasks, milestones, and status in real-time. I also share staging links regularly so you can see exactly what's being built and give feedback before final delivery. Full transparency — no black box.",
    },
    {
      question: "Do you provide hosting and domain setup?",
      answer:   "I focus on development, but I can guide you through purchasing your domain and setting up hosting (Vercel, Netlify, or Hostinger) to make sure your project goes live smoothly.",
    },
    {
      question: "What if I need changes after delivery?",
      answer:   "I provide 1 month of free post-launch support to fix any bugs. For new features or ongoing updates, we can arrange an hourly maintenance plan ($25/hr).",
    },
    {
      question: "Can you build a system with user accounts and a database?",
      answer:   "Yes! I build complete full-stack systems using PHP, Laravel, and MySQL — including user authentication, admin dashboards, and data management. Check the estimator below for pricing.",
    },
    {
      question: "How do we communicate during the project?",
      answer:   "I use WhatsApp or Email for daily communication, and share weekly progress updates with staging links so you can track everything in real-time.",
    },
  ],

  // ── Project Estimator ────────────────────────────────
  estimator: {
    groups: [
      {
        id:       "opt-type",
        question: "1. What type of project do you need?",
        options:  [
          { icon: "fas fa-file-alt",  label: "Landing Page",    value: 100,  active: true  },
          { icon: "fas fa-sitemap",   label: "Multi-page Site",  value: 300,  active: false },
          { icon: "fas fa-rocket",    label: "Web App / SaaS",   value: 600,  active: false },
        ],
      },
      {
        id:       "opt-design",
        question: "2. Do you have a design ready?",
        options:  [
          { icon: "fab fa-figma",          label: "Yes (Figma/PSD)",       value: 0,   active: true  },
          { icon: "fas fa-pencil-ruler",   label: "No, I need help with design", value: 100, active: false },
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
        question: "4. How soon do you need it?",
        options:  [
          { icon: "fas fa-calendar-alt", label: "Flexible (Standard)", value: 1,   active: true  },
          { icon: "fas fa-bolt",         label: "Rush (+50% fee)",      value: 1.5, active: false },
        ],
      },
    ],
  },
};

