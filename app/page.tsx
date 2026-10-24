"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  ArrowUp,
  Megaphone,
  Search,
  ChartNoAxesCombined,
  Globe,
  Palette,
  MousePointer2,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  MessageCircle,
  Mail,
  BarChart3,
  Layers3,
  Target,
  ChevronDown,
} from "lucide-react";
const CONFIG = {
  name: "Avinash Chaudhary",
  email: "hello@avinashchaudhary.com", // Replace with your real email
  whatsapp: "", // Add digits with country code, e.g. 919876543210
  linkedin: "", // Add your LinkedIn profile URL
  accent: "#142D4E",
  tools: [
    "Meta Ads Manager",
    "Google Ads",
    "Google Keyword Planner",
    "WordPress",
    "Elementor",
    "WooCommerce",
    "Canva",
    "Instagram",
    "Facebook",
    "Google Analytics",
    "AI Marketing Tools",
  ],
  skills: [
    {
      icon: "target",
      title: "Paid Ads & Performance",
      items: [
        "Meta Ads & campaign setup",
        "Lead generation campaigns",
        "Audience targeting & retargeting",
        "CPL, CPM, CPC & CTR analysis",
      ],
    },
    {
      icon: "search",
      title: "Google Ads & Search",
      items: [
        "Google Ads setup",
        "Keyword research & intent",
        "Search advertising",
        "Ad copy & optimisation",
      ],
    },
    {
      icon: "chart",
      title: "SEO",
      items: [
        "On-page SEO",
        "Content optimisation",
        "Meta titles & descriptions",
        "Technical SEO fundamentals",
      ],
    },
    {
      icon: "social",
      title: "Social Media Marketing",
      items: [
        "Instagram & Facebook",
        "Content planning",
        "Audience engagement",
        "Brand positioning",
      ],
    },
    {
      icon: "web",
      title: "WordPress Development",
      items: [
        "WordPress & Elementor",
        "Landing page design",
        "Business websites",
        "WooCommerce basics",
      ],
    },
    {
      icon: "creative",
      title: "Content & Creative",
      items: [
        "Social post design",
        "Ad creative concepts",
        "Marketing copywriting",
        "Canva & AI-assisted workflows",
      ],
    },
    {
      icon: "analytics",
      title: "Analytics & Strategy",
      items: [
        "Campaign tracking",
        "Audience research",
        "Competitor analysis",
        "Reporting & insights",
      ],
    },
  ],
  projects: [
    {
      name: "The Building Brands",
      type: "Brand & digital agency",
      desc: "Website development, brand positioning and digital marketing strategy.",
      tags: ["Website", "Branding", "Social strategy"],
      url: "https://thebuildingbrands.com/",
      tone: "peach",
      mark: "TBB",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    },
    {
      name: "FIRE SECURE BHARAT",
      type: "Fire safety · B2B",
      desc: "Social media marketing, creative development and Meta Ads campaign planning.",
      tags: ["Meta Ads", "Creatives", "Lead generation"],
      tone: "red",
      mark: "FSB",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=85",
    },
    {
      name: "SHAKTITVAM",
      type: "Ayurvedic manufacturing",
      desc: "Brand positioning, educational social content and visual consistency.",
      tags: ["Branding", "Content", "Creative direction"],
      tone: "sage",
      mark: "S",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1100&q=85",
    },
    {
      name: "Ghar Soaps",
      type: "Product marketing",
      desc: "Meta Ads lead generation, campaign evaluation and optimisation.",
      tags: ["Meta Ads", "Product", "Optimisation"],
      tone: "pink",
      mark: "ghar",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1100&q=85",
    },
    {
      name: "BAIDYASHREE",
      type: "Ayurvedic e-commerce",
      desc: "WordPress, Elementor and WooCommerce product and category structure.",
      tags: ["WordPress", "Elementor", "WooCommerce"],
      tone: "blue",
      mark: "B",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1100&q=85",
    },
  ],
  services: [
    "Meta Ads & Lead Generation",
    "Google Ads",
    "SEO",
    "Social Media Marketing",
    "WordPress Website Development",
    "Creative & Content Design",
  ],
  faqs: [
    [
      "What services do you offer?",
      "I work across paid advertising, social media marketing, SEO, creative content and WordPress website development. The right scope depends on your goals and current setup.",
    ],
    [
      "Which tools and platforms do you use?",
      "My toolkit includes Meta Ads Manager, Google Ads, Keyword Planner, WordPress, Elementor, WooCommerce, Canva, social platforms and relevant analytics tools.",
    ],
    [
      "How do you approach pricing?",
      "Pricing depends on scope, deliverables, timeline and ongoing support. Share a little context and we can discuss a suitable scope before committing.",
    ],
    [
      "How long does a project take?",
      "Timelines vary by deliverables, feedback and complexity. After understanding the brief, I can help define a realistic schedule.",
    ],
    [
      "How do I get started?",
      "Send a short message describing your business, goals and what you need help with. We can then work out the most useful next step.",
    ],
  ],
};
const iconFor = (name: string) => {
  const props = { size: 21, strokeWidth: 1.6 };
  switch (name) {
    case "target":
      return <Target {...props} />;
    case "search":
      return <Search {...props} />;
    case "chart":
      return <ChartNoAxesCombined {...props} />;
    case "social":
      return <Instagram {...props} />;
    case "web":
      return <Globe {...props} />;
    case "creative":
      return <Palette {...props} />;
    default:
      return <BarChart3 {...props} />;
  }
};
export default function Home() {
  const [active, setActive] = useState("home"),
    [menuOpen, setMenuOpen] = useState(false),
    [faqOpen, setFaqOpen] = useState(0),
    [swapped, setSwapped] = useState(false),
    [formMsg, setFormMsg] = useState("");
  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>("section[id]")];
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          {
            const vis =
              e.isIntersecting &&
              (e.intersectionRatio >= 0.12 ||
                e.intersectionRect.height >= window.innerHeight * 0.12);
            if (vis) e.target.classList.add("in-view");
            else if (!e.isIntersecting) e.target.classList.remove("in-view");
          }
        }),
      { threshold: [0, 0.12] },
    );
    const tag = (sel: string, f: (i: number) => string) =>
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        const i = el.parentElement
          ? [...el.parentElement.children].indexOf(el)
          : 0;
        const c = f(i);
        if (c) el.classList.add(c);
        el.style.transitionDelay = (i % 4) * 90 + "ms";
      });
    tag(".about-visual", () => "from-left");
    tag(".about-copy", () => "from-right");
    tag(".stat-card", () => "pop");
    tag(".skill-card", () => "pop");
    tag(".project-card", (i) => ["from-left", "", "from-right"][i % 3]);
    tag(".service-card", (i) => (i % 2 ? "from-right" : "from-left"));
    tag(".faq-intro", () => "from-left");
    tag(".faq-list", () => "from-right");
    tag(".contact-copy", () => "from-left");
    tag(".contact-form", () => "from-right");
    tag(".testimonial-panel", () => "pop");
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    const navObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => navObs.observe(el));
    const scroll = () =>
      document
        .querySelector(".site-nav")
        ?.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      reveal.disconnect();
      navObs.disconnect();
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  useEffect(() => {
    const st = document.querySelector<HTMLElement>(".hx-stage");
    if (
      !st ||
      !window.matchMedia(
        "(hover:hover) and (min-width:821px) and (prefers-reduced-motion:no-preference)",
      ).matches
    )
      return;
    const mv = (e: PointerEvent) => {
      const r = st.getBoundingClientRect();
      st.style.setProperty(
        "--mx",
        String(((e.clientX - r.left) / r.width - 0.5) * 2),
      );
      st.style.setProperty(
        "--my",
        String(((e.clientY - r.top) / r.height - 0.5) * 2),
      );
    };
    const lv = () => {
      st.style.setProperty("--mx", "0");
      st.style.setProperty("--my", "0");
    };
    st.addEventListener("pointermove", mv);
    st.addEventListener("pointerleave", lv);
    return () => {
      st.removeEventListener("pointermove", mv);
      st.removeEventListener("pointerleave", lv);
    };
  }, []);
  useEffect(() => {
    const g = document.querySelector<HTMLElement>(".cursor-glow");
    if (
      !g ||
      !window.matchMedia(
        "(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)",
      ).matches
    )
      return;
    let tx = 0,
      ty = 0,
      x = 0,
      y = 0,
      raf = 0,
      on = false;
    const mv = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!on) {
        on = true;
        x = tx;
        y = ty;
        g.style.opacity = "1";
      }
    };
    const out = () => {
      on = false;
      g.style.opacity = "0";
    };
    const loop = () => {
      x += (tx - x) * 0.13;
      y += (ty - y) * 0.13;
      g.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", mv, { passive: true });
    document.documentElement.addEventListener("pointerleave", out);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", mv);
      document.documentElement.removeEventListener("pointerleave", out);
    };
  }, []);
  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["services", "Services"],
    ["projects", "Projects"],
    ["experience", "Experience"],
    ["contact", "Contact"],
  ];
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    if (d.get("company-website")) return;
    const subject = encodeURIComponent(
      "Portfolio enquiry from " + d.get("name"),
    );
    const body = encodeURIComponent(
      `Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`,
    );
    setFormMsg("Opening your email app…");
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  }
  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <header className="site-nav">
        <a href="#home" className="brand">
          <span className="brand-symbol">
            a<span>.</span>
          </span>
          <span>
            AVINASH
            <br />
            CHAUDHARY
          </span>
        </a>
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Let’s Connect <ArrowUpRight size={15} />
        </a>
      </header>
      <main>
        <section className="hx" id="home">
          <div className="hx-stage">
            <h1
              className="hx-title"
              aria-label="Building brands. Driving growth."
            >
              <span className="hx-w hx-w1" aria-hidden="true">
                Building
              </span>
              <span className="hx-w hx-w2" aria-hidden="true">
                Brands<i>.</i>
              </span>
              <span className="hx-w hx-w3" aria-hidden="true">
                Growth<i>.</i>
              </span>
            </h1>
            <div className="hx-portrait">
              <Image
                src="/images/hero-portrait.png"
                alt="Portrait of Avinash Chaudhary"
                fill
                priority
                sizes="(max-width: 820px) 80vw, 36vw"
                className="hx-img"
              />
            </div>
            <p className="hx-copy hx-copy-l">
              Thoughtful marketing for brands ready to move forward.
              Performance, SEO and conversion-focused websites, built to last.
            </p>
            <div className="hx-actions">
              <a className="hx-btn" href="#projects">
                View my work
              </a>
              <a className="hx-link" href="#contact">
                Let’s connect <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="hx-copy hx-copy-r">
              Driving growth through performance marketing, social media and
              websites made for real-world results.
            </p>
            <svg
              className="hx-swirl"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path
                pathLength="1"
                d="M56 4C50 20 40 24 31 19C22 14 22 29 33 28C30 38 19 44 9 55"
              />
              <path pathLength="1" d="M9 55L10 42M9 55L21 52" />
            </svg>
            <ul className="hx-list">
              {[
                "Meta & Google Ads",
                "SEO",
                "Social Media",
                "WordPress & Landing Pages",
              ].map((t) => (
                <li key={t}>
                  <a href="#services">
                    <span className="hx-arrow" aria-hidden="true" />
                    <span>{t}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="numbers section-pad" id="numbers">
          <div className="section-label reveal">A QUICK INTRODUCTION</div>
          <div className="numbers-head reveal">
            <h2>
              Numbers that reflect
              <br />
              <em>real work.</em>
            </h2>
            <p>
              Different disciplines, one practical approach: thoughtful work
              that connects the details to the bigger picture.
            </p>
          </div>
          <div className="stats-grid">
            <article className="stat-card reveal">
              <strong>05</strong>
              <span>Featured projects</span>
              <small>Across different industries</small>
            </article>
            <article className="stat-card reveal">
              <strong>07</strong>
              <span>Skill areas</span>
              <small>From ads to implementation</small>
            </article>
            <article className="stat-card reveal">
              <strong>11</strong>
              <span>Tools & platforms</span>
              <small>A practical digital toolkit</small>
            </article>
          </div>
        </section>
        <section className="about section-pad" id="about">
          <div className="about-visual reveal">
            <div
              className={"ab-stage" + (swapped ? " swapped" : "")}
              role="button"
              tabIndex={0}
              aria-label="Swap photos"
              onMouseEnter={() => setSwapped(true)}
              onMouseLeave={() => setSwapped(false)}
              onClick={() => setSwapped((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSwapped((v) => !v);
                }
              }}
            >
              <div className="ab-card ab-a">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85"
                  alt="Team collaborating on a campaign"
                  loading="lazy"
                />
                <span className="ab-tag">STRATEGY</span>
              </div>
              <div className="ab-card ab-b">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85"
                  alt="Reviewing campaign analytics on a laptop"
                  loading="lazy"
                />
                <span className="ab-tag">EXECUTION</span>
              </div>
              <div className="ab-caption">
                CREATIVE THINKING / PRACTICAL EXECUTION
              </div>
            </div>
          </div>
          <div className="about-copy reveal">
            <div className="section-label">01 / ABOUT ME</div>
            <h2>
              Marketing that gets implemented, <em>not just planned.</em>
            </h2>
            <p>
              I’m Avinash Chaudhary, a digital marketer working across digital
              advertising, social media marketing, search engine optimization,
              content strategy and branding. I help businesses build a stronger
              online presence and reach the right audience.
            </p>
            <p>
              I also build websites with WordPress and Elementor, bringing
              marketing thinking into the experience—from the first impression
              to the next action.
            </p>
            <a href="#experience" className="button button-dark">
              Explore my approach <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
        <section className="skills section-pad" id="skills">
          <div className="section-label reveal">02 / WHAT I WORK ON</div>
          <div className="section-heading reveal">
            <h2>
              Strategy, creative
              <br />
              and <em>execution.</em>
            </h2>
            <p>
              A connected set of skills for helping brands show up clearly and
              turn attention into action.
            </p>
          </div>
          <div className="skills-grid">
            {CONFIG.skills.map((s, i) => (
              <article className="skill-card reveal" key={s.title}>
                <div className="skill-icon">{iconFor(s.icon)}</div>
                <span className="card-index">0{i + 1}</span>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="tools-area reveal">
            <div>
              <div className="section-label">THE TOOLKIT</div>
              <h3>Tools I work with</h3>
            </div>
            <div className="marquee">
              <div className="marquee-track">
                {[...CONFIG.tools, ...CONFIG.tools].map((t, i) => (
                  <span className="tool-pill" key={`${t}${i}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="projects section-pad" id="projects">
          <div className="section-label reveal">03 / SELECTED WORK</div>
          <div className="section-heading split-heading reveal">
            <h2>
              Selected projects
              <br />
              that deliver <em>impact.</em>
            </h2>
            <p>
              A snapshot of brand, marketing and web work. Verified campaign
              outcomes can be added when available.
            </p>
          </div>
          <div className="project-grid">
            {CONFIG.projects.map((p, i) => (
              <article className="project-card reveal" key={p.name}>
                <div className={`project-visual ${p.tone}`}>
                  <img
                    className="project-photo"
                    src={p.image}
                    alt={`Illustrative image for ${p.name}`}
                    loading="lazy"
                  />
                  <span className="project-count">0{i + 1} / 05</span>
                </div>
                <div className="project-info">
                  <span className="project-type">{p.type}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-bottom">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer">
                        Visit website <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="no-link">
                        Project overview <ArrowUpRight size={14} />
                      </span>
                    )}
                    <small>Results: coming soon</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="services section-pad" id="services">
          <div className="section-label reveal">04 / HOW I CAN HELP</div>
          <div className="section-heading split-heading reveal">
            <h2>
              Good thinking.
              <br />
              <em>Useful work.</em>
            </h2>
            <p>
              Support across the parts of digital marketing that need to work
              together.
            </p>
          </div>
          <div className="services-grid">
            {CONFIG.services.map((s, i) => (
              <article className="service-card reveal" key={s}>
                <span className="service-number">0{i + 1}</span>
                <div className="service-symbol">
                  {
                    [
                      <Megaphone />,
                      <Search />,
                      <ChartNoAxesCombined />,
                      <Instagram />,
                      <Globe />,
                      <Palette />,
                    ][i]
                  }
                </div>
                <h3>{s}</h3>
                <ArrowUpRight className="service-arrow" size={18} />
              </article>
            ))}
          </div>
        </section>
        <section className="approach section-pad" id="experience">
          <div className="section-label reveal">05 / MY APPROACH</div>
          <div className="section-heading reveal">
            <h2>
              Thoughtful by design.
              <br />
              <em>Practical by nature.</em>
            </h2>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Research",
                "Understand the business, audience, category and the real problem to solve.",
              ],
              [
                "02",
                "Strategy",
                "Choose a focused direction, channels and messages that fit the goal.",
              ],
              [
                "03",
                "Build & launch",
                "Turn the plan into campaigns, content and useful digital experiences.",
              ],
              [
                "04",
                "Measure & optimise",
                "Review available data, learn from what happens and improve the next iteration.",
              ],
            ].map((x) => (
              <article className="process-card reveal" key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
          <div className="experience-note reveal">
            <span className="section-label">EXPERIENCE & LEARNING</span>
            <p>
              My work spans digital marketing, creative planning and website
              implementation. This portfolio focuses on the projects and skills
              I can discuss honestly—without inflated numbers or unverified
              claims.
            </p>
          </div>
        </section>
        <section className="testimonial section-pad">
          <div className="testimonial-panel reveal">
            <span className="section-label">WORDS FROM COLLABORATORS</span>
            <h2>
              Good work is a<br />
              <em>team effort.</em>
            </h2>
            <p>Verified testimonials will be added here when available.</p>
            <span className="quote-mark">“</span>
            <small>ADD VERIFIED TESTIMONIALS</small>
          </div>
        </section>
        <section className="faq section-pad" id="faq">
          <div className="faq-intro reveal">
            <span className="section-label">06 / GOOD TO KNOW</span>
            <h2>
              Frequently asked
              <br />
              <em>questions.</em>
            </h2>
            <div className="call-card">
              <span>HAVE A PROJECT IN MIND?</span>
              <h3>Let’s talk it through.</h3>
              <a href="#contact" className="button button-orange">
                Get in touch <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="faq-list reveal">
            {CONFIG.faqs.map(([q, a], i) => (
              <article
                className={`faq-item ${faqOpen === i ? "open" : ""}`}
                key={q}
              >
                <button
                  aria-expanded={faqOpen === i}
                  onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}
                >
                  <span>{q}</span>
                  <span className="faq-plus">{faqOpen === i ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <p>{a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="contact section-pad" id="contact">
          <div className="contact-panel">
            <div className="contact-copy reveal">
              <span className="section-label">07 / YOUR NEXT STEP</span>
              <h2>
                Let’s build something
                <br />
                that <em>grows.</em>
              </h2>
              <p>
                Looking for digital marketing support, a website, fresh campaign
                direction or a new team member? Tell me what you’re working on.
              </p>
              <div className="contact-links">
                <a href={`mailto:${CONFIG.email}`}>
                  Email Avinash <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="contact-socials" aria-label="Social media links">
                {/* WhatsApp */}
                <a
                  className="social-circle whatsapp"
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.07 0C5.53 0 .2 5.32.2 11.87c0 2.1.55 4.15 1.6 5.95L.1 24l6.34-1.66a11.9 11.9 0 0 0 5.63 1.43h.01c6.54 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.43-8.42ZM12.08 21.75a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.23c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                  </svg>
                </a>

                {/* Phone */}
                <a
                  className="social-circle phone"
                  href="tel:+919876543210"
                  aria-label="Phone"
                  title="Phone"
                >
                  <Phone size={20} />
                </a>

                {/* Instagram */}
                <a
                  className="social-circle instagram"
                  href="https://www.instagram.com/your-username/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>

                {/* Facebook */}
                <a
                  className="social-circle facebook"
                  href="https://www.facebook.com/your-username/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  className="social-circle linkedin"
                  href="https://www.linkedin.com/in/your-username/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={submit}>
              <h3>Tell me what you have in mind.</h3>
              <p>
                Share a little context and I’ll help you figure out a useful
                next step.
              </p>
              <label>
                Name
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="A few details about your project or opportunity…"
                />
              </label>
              <div className="honeypot" aria-hidden="true">
                <label>
                  Leave this empty
                  <input
                    name="company-website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
              <button className="button button-orange" type="submit">
                Prepare email <ArrowUpRight size={16} />
              </button>
              <small>
                {formMsg ||
                  "This opens your email app; your message is not sent automatically."}
              </small>
            </form>
          </div>
          <footer>
            <a href="#home" className="brand">
              <span className="brand-symbol">
                a<span>.</span>
              </span>
              <span>
                AVINASH
                <br />
                CHAUDHARY
              </span>
            </a>
            <span>© {new Date().getFullYear()} Avinash Chaudhary</span>
            <a href="#home" className="back-top">
              BACK TO TOP <ArrowUp size={13} />
            </a>
          </footer>
        </section>
      </main>
    </>
  );
}
