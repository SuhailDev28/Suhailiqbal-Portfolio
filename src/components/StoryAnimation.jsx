import React, { useEffect, useMemo, useState } from "react";
import "./story-animation.css";

const storySlides = [
  {
    image: "/assets/character-apps.png",
    eyebrow: "Hello",
    title: "I’m Suhail Iqbal",
    text: "Full Stack & Flutter Developer building modern web apps, mobile apps and business dashboards.",
    tag: "Welcome",
  },
  {
    image: "/assets/character-services.png",
    eyebrow: "Services",
    title: "I design & build digital products",
    text: "From idea to UI, backend, admin panel, automation and deployment.",
    tag: "Build",
  },
  {
    image: "/assets/character-work.png",
    eyebrow: "Work",
    title: "Real business projects",
    text: "Portfolio websites, SaaS platforms, booking systems, dashboards and PWA experiences.",
    tag: "Projects",
  },
  {
    image: "/assets/character-stack.png",
    eyebrow: "Stack",
    title: "React, Node, MongoDB & Flutter",
    text: "Clean frontend, secure APIs, scalable database structure and mobile-ready interfaces.",
    tag: "Tech Stack",
  },
  {
    image: "/assets/character-process2.png",
    eyebrow: "Process",
    title: "Plan. Build. Test. Launch.",
    text: "A complete development flow focused on performance, usability and business value.",
    tag: "Process",
  },
  {
    image: "/assets/character-experience.png",
    eyebrow: "Experience",
    title: "Full-cycle delivery",
    text: "I handle UI, development, backend logic, integrations, deployment and long-term support.",
    tag: "Experience",
  },
  {
    image: "/assets/character-contact.png",
    eyebrow: "Contact",
    title: "Let’s build something",
    text: "Available for selected freelance, SaaS, web app and mobile app projects.",
    tag: "Contact",
  },
];

export default function StoryAnimation() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = storySlides[active];

  const progressItems = useMemo(() => storySlides.map((_, index) => index), []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % storySlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % storySlides.length);
  };

  const previousSlide = () => {
    setActive((prev) => (prev - 1 + storySlides.length) % storySlides.length);
  };

  return (
    <section
      className="story-section"
      id="story"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="story-bg-grid" />
      <div className="story-glow story-glow-one" />
      <div className="story-glow story-glow-two" />

      <div className="story-card">
        <div className="story-progress">
          {progressItems.map((item) => (
            <button
              key={item}
              type="button"
              className={item === active ? "active" : ""}
              onClick={() => setActive(item)}
              aria-label={`Go to story ${item + 1}`}
            >
              <span />
            </button>
          ))}
        </div>

        <div className="story-content">
          <div className="story-copy" key={`copy-${active}`}>
            <span className="story-eyebrow">{currentSlide.eyebrow}</span>

            <h2>{currentSlide.title}</h2>

            <p>{currentSlide.text}</p>

            <div className="story-actions">
              <a href="#work" className="story-btn primary">
                View Work
              </a>

              <a href="#contact" className="story-btn secondary">
                Contact Me
              </a>
            </div>

            <div className="story-mini-status">
              <span>{currentSlide.tag}</span>
              <strong>
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(storySlides.length).padStart(2, "0")}
              </strong>
            </div>
          </div>

          <div className="story-character-area" key={`character-${active}`}>
            <div className="story-orbit orbit-a" />
            <div className="story-orbit orbit-b" />
            <div className="story-orbit orbit-c" />

            <span className="story-floating-icon icon-code">&lt;/&gt;</span>
            <span className="story-floating-icon icon-react">⚛</span>
            <span className="story-floating-icon icon-api">API</span>

            <div className="story-character-glow" />

            <img
              className="story-character"
              src={currentSlide.image}
              alt={currentSlide.title}
              draggable="false"
            />
          </div>
        </div>

        <div className="story-controls">
          <button type="button" onClick={previousSlide} aria-label="Previous story">
            ←
          </button>

          <button type="button" onClick={nextSlide} aria-label="Next story">
            →
          </button>
        </div>
      </div>
    </section>
  );
}