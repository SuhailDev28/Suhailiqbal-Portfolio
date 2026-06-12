import React from "react";
import ReactDOM from "react-dom/client";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Moon,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Trophy,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Suhail Iqbal",
  firstName: "Suhail",
  photo: `${import.meta.env.BASE_URL}assets/suhail-avatar-cartoon.png`,
  role: "Full Stack Developer",
  location: "Doha, Qatar",
  email: "suhailiqbal28@gmail.com",
  phone: "+97474068761",
  whatsappNumber: "97474068761",
  tagline:
    "I design and build modern web applications, business dashboards, SaaS platforms, automation systems, and premium digital experiences for growing companies.",
  availability: "Available for selected freelance, SaaS and business software projects",
};

function getHireMeLink() {
  const subject = encodeURIComponent("Project Enquiry - Full Stack Development");

  const body = encodeURIComponent(`Hi Suhail,

I would like to discuss a project with you.

Project type:
Budget:
Timeline:
Brief description:

Thank you.`);

  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

function getWhatsappLink() {
  const message = encodeURIComponent(`Hi Suhail,

I would like to discuss a website / web app / dashboard project with you.

Project type:
Budget:
Timeline:
Brief description:`);

  return `https://wa.me/${profile.whatsappNumber}?text=${message}`;
}

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "6+", label: "Years Digital Experience" },
  { value: "20+", label: "Web & App Projects" },
  { value: "Qatar", label: "Business Market Focus" },
  { value: "Full-cycle", label: "Design → Build → Launch" },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Full Stack Web Apps",
    description:
      "React, Node.js, Express and database-backed platforms with premium responsive interfaces.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Dashboards, booking workflows, approvals, notifications, reports and admin operations.",
  },
  {
    icon: Globe2,
    title: "Corporate Websites",
    description:
      "Premium websites for holdings, real estate, construction, academies, agencies and brands.",
  },
  {
    icon: Palette,
    title: "UI/UX & Brand Systems",
    description:
      "Clean layouts, responsive screens, RTL-ready interfaces, design systems and product visuals.",
  },
  {
    icon: BarChart3,
    title: "Admin Dashboards",
    description:
      "Operational panels with filters, analytics cards, CRUD flows, roles and real-time visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Deployment & Maintenance",
    description:
      "Hosting setup, performance tuning, responsive QA, bug fixing and long-term improvements.",
  },
];

const stackGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI", "RTL Layouts"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "Auth", "Role Access", "Cron Jobs"],
  },
  {
    title: "Database & CMS",
    icon: Database,
    items: ["MongoDB", "Mongoose", "WordPress", "WooCommerce", "Data Models"],
  },
  {
    title: "Design & Delivery",
    icon: Palette,
    items: ["Figma", "Photoshop", "Illustrator", "SEO", "Branding", "Deployment"],
  },
];

const projectCategories = ["All", "SaaS", "Automation", "Corporate", "CMS"];

const projects = [
  {
    title: "Arzaan — Qatar Electronics Price Comparison",
    category: "SaaS",
    meta: "React + Express + MongoDB",
    description:
      "Qatar electronics price comparison platform with crawler architecture, retailer adapters, product matching, offers and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Crawler", "Admin"],
    outcome: "Retailer price engine",
  },
  {
    title: "KidGage — Multi-Academy Booking Platform",
    category: "SaaS",
    meta: "Booking SaaS Platform",
    description:
      "Multi-academy booking system with parent accounts, activity packages, booking sessions, payments, certificates and PWA-ready flows.",
    tags: ["SaaS", "Bookings", "PWA", "Payments"],
    outcome: "End-to-end booking workflow",
  },
  {
    title: "Rebel Angels Gymnastics Scoring System",
    category: "Automation",
    meta: "Competition Management",
    description:
      "Gymnastics event scoring system with judge assignments, decimal scoring, leaderboard, certificates and role-based access.",
    tags: ["Scoring", "Roles", "PDF", "Events"],
    outcome: "Live event scoring system",
  },
  {
    title: "NextMove Holding Digital Solutions",
    category: "Corporate",
    meta: "Corporate Systems",
    description:
      "Internal business applications, dashboards, workflow automation, API integrations and enterprise management tools.",
    tags: ["Automation", "Corporate", "APIs"],
    outcome: "Business transformation tools",
  },
  {
    title: "OBM — AI Consultancy Website",
    category: "Corporate",
    meta: "Corporate Website",
    description:
      "Modern consultancy website with service positioning, packages, admin settings, theme controls and responsive layout.",
    tags: ["Corporate UI", "Theme", "React"],
    outcome: "Premium service website",
  },
  {
    title: "Business Websites & WordPress Solutions",
    category: "CMS",
    meta: "CMS + E-Commerce",
    description:
      "Responsive websites, WordPress builds, Elementor pages, WooCommerce interfaces, SEO pages and bilingual layouts.",
    tags: ["WordPress", "WooCommerce", "SEO"],
    outcome: "CMS delivery for businesses",
  },
];

const experience = [
  {
    company: "NextMove Holding",
    role: "Full Stack Developer & Digital Solutions Specialist",
    period: "2025 — Present",
    points: [
      "Building internal business applications, portals, dashboards and workflow automation.",
      "Supporting API integrations, corporate websites, branding systems and enterprise solutions.",
    ],
  },
  {
    company: "Al Zaini Trading",
    role: "Full Stack Developer",
    period: "June 2024 — Present",
    points: [
      "Developing web platforms, digital systems and business-facing interfaces.",
      "Combining frontend, backend, design execution and deployment support.",
    ],
  },
  {
    company: "Applab",
    role: "UI/UX Designer",
    period: "Aug 2024 — Oct 2024",
    points: [
      "Created user interfaces, product screens and responsive user flows.",
      "Worked across usability, layout structure and digital product experience.",
    ],
  },
  {
    company: "Ostruchess Marketing & Branding",
    role: "Web Developer & Project Lead",
    period: "Sep 2023 — Jun 2024",
    points: [
      "Led website projects from planning and design to delivery.",
      "Worked on branding, campaigns, client websites and project coordination.",
    ],
  },
];

const process = [
  {
    title: "Discovery & Scope",
    text: "Clarify goals, roles, workflows, pages and launch priorities.",
  },
  {
    title: "UI/UX Planning",
    text: "Design clean screens, mobile flows and premium visual direction.",
  },
  {
    title: "Frontend Development",
    text: "Build responsive React interfaces with reusable components.",
  },
  {
    title: "Backend & APIs",
    text: "Create secure APIs, database models, validation and auth.",
  },
  {
    title: "Testing & Optimization",
    text: "Check responsiveness, bugs, performance and production readiness.",
  },
  {
    title: "Launch & Support",
    text: "Deploy, monitor, fix, improve and support future upgrades.",
  },
];

const testimonials = [
  {
    quote:
      "Strong practical understanding of business workflows, not only design. The systems are built with real operations in mind.",
    name: "Business Operations Client",
  },
  {
    quote:
      "Good balance of UI quality, dashboard structure and technical delivery for modern web platforms.",
    name: "Digital Project Stakeholder",
  },
  {
    quote:
      "Reliable for turning requirements into working screens, admin modules and clean user experiences.",
    name: "Web Platform Client",
  },
];

const heroSkills = ["React", "Node.js", "MongoDB", "UI/UX", "WordPress", "Automation"];
const heroParticles = Array.from({ length: 14 }, (_, index) => index);

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const heroCardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
};

const heroChildVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroLetterVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -90,
    filter: "blur(16px)",
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.1 + index * 0.045,
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

function useTheme() {
  const [theme, setTheme] = React.useState(getInitialTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function AnimatedNumber({ value }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  const [display, setDisplay] = React.useState(0);

  const numeric = Number(String(value).replace(/\D/g, ""));
  const suffix = String(value).replace(/[0-9]/g, "");

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!shown || !numeric) return undefined;

    let frame = 0;
    const total = 36;

    const timer = setInterval(() => {
      frame += 1;
      setDisplay(Math.round((numeric * frame) / total));
      if (frame >= total) clearInterval(timer);
    }, 24);

    return () => clearInterval(timer);
  }, [shown, numeric]);

  if (!numeric) return <strong ref={ref}>{value}</strong>;

  return (
    <strong ref={ref}>
      {display}
      {suffix}
    </strong>
  );
}

function TextReveal({ children, className = "" }) {
  return (
    <motion.span
      className={`text-reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.035 },
        },
      }}
    >
      {String(children)
        .split(" ")
        .map((word, index) => (
          <motion.span
            className="text-reveal-word"
            key={`${word}-${index}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 22,
                rotateX: -70,
                filter: "blur(8px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
              },
            }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
    </motion.span>
  );
}

function TiltCard({ children, className = "" }) {
  const ref = React.useRef(null);

  const [style, setStyle] = React.useState({
    "--mx": "50%",
    "--my": "50%",
  });

  function handleMouseMove(event) {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`,
      "--mx": `${x}px`,
      "--my": `${y}px`,
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      "--mx": "50%",
      "--my": "50%",
    });
  }

  return (
    <motion.article
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.article>
  );
}

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = React.useState(false);

  const isDark = theme === "dark";
  const nextThemeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <a href="#" className="brand" aria-label="Suhail Iqbal Portfolio Home">
        <span className="brand-mark image-brand-mark">
          <img src={profile.photo} alt="Suhail Iqbal" />
        </span>

        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <nav className="desktop-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label={nextThemeLabel}>
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <a className="whatsapp-cta" href={getWhatsappLink()} target="_blank" rel="noreferrer">
          WhatsApp
          <MessageCircle size={16} />
        </a>

        <a className="header-cta" href={getHireMeLink()}>
          Hire Me
          <ArrowUpRight size={16} />
        </a>

        <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, scale: 0.94, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -16 }}
            transition={{ duration: 0.2 }}
          >
            <button className="close-button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>

            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}

            <button className="mobile-theme" onClick={toggleTheme}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>

            <a
              className="mobile-whatsapp"
              href={getWhatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp Me
            </a>

            <a className="mobile-cta" href={getHireMeLink()}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      <span className="eyebrow">{eyebrow}</span>

      <h2>
        <TextReveal>{title}</TextReveal>
      </h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function Hero() {
  const heroRef = React.useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const avatarX = useTransform(mouseX, [-1, 1], [-18, 18]);
  const avatarY = useTransform(mouseY, [-1, 1], [-14, 14]);
  const ringRotateX = useTransform(mouseY, [-1, 1], [10, -10]);
  const ringRotateY = useTransform(mouseX, [-1, 1], [-12, 12]);

  function handleHeroPointerMove(event) {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  }

  function handleHeroPointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={heroRef}
      className="poster-header-section"
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
    >
      <motion.div
        className="poster-header-card hero-animated-card"
        variants={heroCardVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-shine"
          animate={{ x: ["-140%", "140%"] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 1.8,
            ease: "easeInOut",
          }}
        />

        <div className="hero-particles" aria-hidden="true">
          {heroParticles.map((item) => (
            <motion.span
              key={item}
              className={`hero-particle hero-particle-${item + 1}`}
              animate={{
                y: [0, -18, 0],
                x: [0, item % 2 === 0 ? 10 : -10, 0],
                opacity: [0.25, 0.95, 0.25],
                scale: [1, 1.35, 1],
              }}
              transition={{
                duration: 3.5 + item * 0.22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item * 0.18,
              }}
            />
          ))}
        </div>

        <motion.div className="hero-orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }} />
        <motion.div className="hero-orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} />

        <div className="poster-header-title hero-title" aria-hidden="true">
          {"PORTFOLIO".split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              custom={index}
              variants={heroLetterVariants}
              whileHover={{
                y: -12,
                scale: 1.06,
                transition: { duration: 0.2 },
              }}
            >
              {letter}
            </motion.span>
          ))}

          <motion.small
            initial={{ opacity: 0, scale: 0.4, rotate: -18 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.75, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            '26
          </motion.small>
        </div>

        <motion.div className="hero-availability" variants={heroChildVariants}>
          <motion.span
            animate={{ scale: [1, 1.35, 1], opacity: [1, 0.45, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          {profile.availability}
        </motion.div>

        <motion.div className="poster-header-avatar-area" variants={heroChildVariants}>
          <motion.div
            className="poster-header-avatar hero-avatar"
            style={{
              x: avatarX,
              y: avatarY,
              rotateX: ringRotateX,
              rotateY: ringRotateY,
            }}
            animate={{
              scale: [1, 1.025, 1],
            }}
            transition={{
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              className="hero-avatar-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <img
              src={profile.photo}
              alt={`${profile.name} avatar`}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </motion.div>

          <motion.div
            className="poster-header-badge hero-badge"
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                "0 0 0 rgba(56, 189, 248, 0)",
                "0 18px 40px rgba(56, 189, 248, 0.22)",
                "0 0 0 rgba(56, 189, 248, 0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 size={15} />
            Full Stack Developer
          </motion.div>
        </motion.div>

        <motion.div className="poster-header-divider" variants={heroChildVariants} />

        <motion.div className="poster-header-info" variants={heroChildVariants}>
          <motion.div
            className="poster-header-about"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <span>About Me</span>
            <h1>Hi, I’m {profile.firstName}</h1>
            <p>
              I create modern websites, dashboards, SaaS platforms and automation systems
              with clean UI, scalable backend structure and launch-focused execution.
            </p>
          </motion.div>

          {[
            { label: "Location", value: profile.location },
            { label: "Focus", value: "React, Node.js, MongoDB" },
            { label: "Contact", value: profile.email },
          ].map((item, index) => (
            <motion.div
              className="poster-header-item"
              key={item.label}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9 + index * 0.09, duration: 0.45 },
              }}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="poster-header-actions hero-chip-row" variants={heroChildVariants}>
          <motion.a whileHover={{ y: -5, scale: 1.04 }} whileTap={{ scale: 0.96 }} href="#work" className="poster-header-chip">
            View Work
            <ArrowUpRight size={14} />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={getWhatsappLink()}
            className="poster-header-chip whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
            <MessageCircle size={14} />
          </motion.a>

          <motion.a whileHover={{ y: -5, scale: 1.04 }} whileTap={{ scale: 0.96 }} href={getHireMeLink()} className="poster-header-chip">
            Hire Me
            <Mail size={14} />
          </motion.a>

          {heroSkills.map((item, index) => (
            <motion.span
              className="poster-header-chip dark hero-skill-chip"
              key={item}
              initial={{ opacity: 0, y: 18, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.05 + index * 0.06, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.a
          href="#services"
          className="hero-scroll-cue"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.45 }}
        >
          <span>Scroll</span>
          <motion.i
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.a>
      </motion.div>

      <motion.div
        className="stats-grid poster-header-stats"
        variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat) => (
          <motion.div className="stat-card" key={stat.label} variants={fadeUp}>
            <AnimatedNumber value={stat.value} />
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading
        eyebrow="Services"
        title="Digital solutions from idea to launch"
        description="I work across frontend, backend, UI/UX and business operations to create practical systems that are clean, scalable and easy to use."
      />

      <div className="service-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <TiltCard className="service-card" key={service.title}>
              <div className="service-icon">
                <Icon size={24} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}

function Work() {
  const [active, setActive] = React.useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="work" className="section">
      <SectionHeading
        eyebrow="Selected Work"
        title="Recent full-stack and digital systems"
        description="A mix of SaaS platforms, internal systems, corporate websites, admin dashboards and automation-focused products."
      />

      <div className="filter-bar">
        {projectCategories.map((category) => (
          <button
            key={category}
            className={active === category ? "active" : ""}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <TiltCard className="project-card" key={project.title}>
              <div className="project-top">
                <span>{project.meta}</span>
                <ExternalLink size={18} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-outcome">
                <Trophy size={16} />
                {project.outcome}
              </div>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="section split-section">
      <div>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to build modern products"
          description="My work combines software engineering, design thinking, CMS experience and business process understanding."
        />

        <div className="stack-group-grid">
          {stackGroups.map((group) => {
            const Icon = group.icon;

            return (
              <TiltCard className="stack-group" key={group.title}>
                <div className="stack-title">
                  <Icon size={20} />
                  <h3>{group.title}</h3>
                </div>

                <div className="stack-grid">
                  {group.items.map((item) => (
                    <span key={item} className="stack-pill">
                      <CheckCircle2 size={16} />
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      <motion.div
        className="highlight-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.55 }}
      >
        <Sparkles size={28} />

        <h3>What makes my work different?</h3>

        <p>
          I do not only create screens. I think through the full business flow: users,
          admin roles, data structure, approvals, payments, notifications, reporting,
          deployment and long-term maintainability.
        </p>

        <div className="quality-list">
          <span>
            <ShieldCheck size={18} /> Secure structure
          </span>

          <span>
            <Rocket size={18} /> Launch-focused delivery
          </span>

          <span>
            <Building2 size={18} /> Business-first thinking
          </span>

          <span>
            <Zap size={18} /> Fast iteration
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Experience"
        title="Professional background"
        description="A practical mix of full-stack development, UI/UX, branding, project leadership and digital transformation work."
      />

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <div className="timeline-marker">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                </div>

                <span>{item.period}</span>
              </div>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section process-section">
      <SectionHeading
        eyebrow="Process"
        title="A clear workflow for every project"
        description="From scope to launch, the work is structured so clients know what is being built, why it matters and how it will be delivered."
      />

      <div className="process-grid">
        {process.map((step, index) => (
          <TiltCard className="process-card" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.title}</strong>
            <p>{step.text}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonial-section">
      <SectionHeading
        eyebrow="Client Value"
        title="Built for real business use"
        description="The focus is always on practical delivery: clear UX, usable admin flows, clean data, responsive layouts and scalable foundations."
      />

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <TiltCard className="testimonial-card" key={item.name}>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={15} fill="currentColor" />
              ))}
            </div>

            <p>“{item.quote}”</p>
            <strong>{item.name}</strong>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 26, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">Contact</span>

        <h2>
          <TextReveal>Need a website, web app, dashboard or automation system?</TextReveal>
        </h2>

        <p>
          I can help plan, design and develop a professional digital product that fits your
          business workflow and growth stage.
        </p>

        <div className="contact-actions">
          <a
            href={getWhatsappLink()}
            className="btn whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            WhatsApp Me
          </a>

          <a href={getHireMeLink()} className="btn primary">
            <Mail size={18} />
            Hire Me
          </a>

          <a href="#work" className="btn secondary">
            View Work
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-strip">
          <span>
            <MapPin size={16} /> {profile.location}
          </span>

          <span>
            <Mail size={16} /> {profile.email}
          </span>

          <span>
            <MessageCircle size={16} /> WhatsApp: {profile.phone}
          </span>

          <span>
            <BadgeCheck size={16} /> Freelance / Contract / Product Build
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingDock() {
  return (
    <motion.div
      className="floating-dock"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <a href={getWhatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={18} />
      </a>

      <a href={getHireMeLink()} aria-label="Hire Me">
        <Mail size={18} />
      </a>

      <a href="#work" aria-label="Work">
        <BriefcaseBusiness size={18} />
      </a>

      <a href="#services" aria-label="Services">
        <Sparkles size={18} />
      </a>

      <a href="#contact" aria-label="Contact">
        <ArrowRight size={18} />
      </a>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>

        <span>
          {profile.role} — {profile.location}
        </span>
      </div>

      <div className="footer-links">
        <a href={getWhatsappLink()} target="_blank" rel="noreferrer">
          <MessageCircle size={16} /> WhatsApp
        </a>

        <a href={getHireMeLink()}>
          <Mail size={16} /> Hire Me
        </a>

        <a href="#work">
          <Code2 size={16} /> Work
        </a>

        <a href="#contact">
          <ExternalLink size={16} /> Contact
        </a>
      </div>

      <p>© {new Date().getFullYear()} Suhail Iqbal. Built with React + Framer Motion.</p>
    </footer>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <ScrollProgress />

      <div className="noise" />
      <div className="background-grid" />
      <div className="background-glow glow-a" />
      <div className="background-glow glow-b" />

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <Services />
        <Work />
        <Stack />
        <Experience />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      <FloatingDock />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);