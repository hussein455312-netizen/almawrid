"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";

const services = [
  {
    number: "01",
    title: "REAL ESTATE",
    short: "INVESTMENT",
    description:
      "Strategic real estate investment built around opportunity, market intelligence, disciplined analysis, and long-term value creation.",
    details: ["Market Intelligence", "Asset Evaluation", "Opportunity Analysis"],
  },
  {
    number: "02",
    title: "CONSTRUCTION",
    short: "EXECUTION",
    description:
      "General contracting and construction execution with attention to quality, coordination, precision, and architectural integrity.",
    details: ["General Contracting", "Construction Management", "Execution"],
  },
  {
    number: "03",
    title: "INVESTMENT",
    short: "STRATEGY",
    description:
      "Transforming opportunities into structured investment strategies designed around sustainable long-term potential.",
    details: ["Opportunity Strategy", "Investment Planning", "Value Creation"],
  },
  {
    number: "04",
    title: "CONSULTING",
    short: "ADVISORY",
    description:
      "Professional insight and strategic guidance supporting informed decisions across real estate, construction, and investment.",
    details: ["Strategic Advisory", "Feasibility Thinking", "Decision Support"],
  },
];

const values = [
  {
    number: "01",
    title: "VISION",
    text: "We look beyond the immediate opportunity and focus on what can create lasting value.",
  },
  {
    number: "02",
    title: "PRECISION",
    text: "Every decision, detail, and execution step matters when the objective is built to last.",
  },
  {
    number: "03",
    title: "INTEGRITY",
    text: "We build relationships through responsibility, transparency, and professional commitment.",
  },
];

const process = [
  {
    number: "01",
    title: "DISCOVER",
    text: "Understand the opportunity, environment, objective, and underlying potential.",
  },
  {
    number: "02",
    title: "ANALYZE",
    text: "Study the market, requirements, risks, constraints, and practical possibilities.",
  },
  {
    number: "03",
    title: "STRATEGIZE",
    text: "Create a clear direction that connects vision with realistic execution.",
  },
  {
    number: "04",
    title: "EXECUTE",
    text: "Move from strategy to tangible results through disciplined implementation.",
  },
];

const principles = [
  "LONG-TERM THINKING",
  "DISCIPLINED EXECUTION",
  "STRATEGIC DECISIONS",
  "ARCHITECTURAL QUALITY",
];

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introExit, setIntroExit] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  const heroRef = useRef<HTMLElement>(null);

  /* --------------------------------------------------
     INTRO EXPERIENCE
  -------------------------------------------------- */

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => {
      setIntroExit(true);
    }, 2300);

    const finishTimer = window.setTimeout(() => {
      setIntroVisible(false);
      document.body.style.overflow = "";
    }, 3200);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  /* --------------------------------------------------
     GLOBAL SCROLL
  -------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------------------------
     MOUSE LIGHT
  -------------------------------------------------- */

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* ==================================================
          CINEMATIC INTRO
      ================================================== */}

      {introVisible && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505] transition-all duration-[900ms]"
          style={{
            opacity: introExit ? 0 : 1,
            pointerEvents: introExit ? "none" : "auto",
          }}
        >
          {/* Architectural Grid */}
          <div className="absolute inset-0 intro-grid opacity-30" />

          {/* Center Lines */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#D4AF37]/20" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-[#D4AF37]/20" />

          {/* Golden Atmosphere */}
          <div className="intro-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

          {/* Corner Frame */}
          <div className="absolute inset-6 border border-white/[0.04] md:inset-10" />

          <div className="relative z-10 text-center">
            <div className="mb-7 overflow-hidden">
              <p className="intro-logo text-4xl font-medium tracking-[0.3em] text-white md:text-6xl">
                ALMAWRID
              </p>
            </div>

            <div className="mx-auto h-px w-20 bg-[#D4AF37]" />

            <p className="mt-6 text-[9px] tracking-[0.4em] text-[#D4AF37] md:text-xs">
              REAL ESTATE · CONSTRUCTION · INVESTMENT
            </p>
          </div>

          <div className="absolute bottom-8 left-8">
            <p className="text-[8px] tracking-[0.35em] text-white/30">
              BAGHDAD · IRAQ
            </p>
          </div>

          <div className="absolute bottom-8 right-8">
            <p className="text-[8px] tracking-[0.35em] text-white/30">
              EST. ALMAWRID
            </p>
          </div>

          {/* Progress */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/10">
            <div className="intro-progress h-full bg-[#D4AF37]" />
          </div>
        </div>
      )}

      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <Navbar />

      {/* ==================================================
          MAIN
      ================================================== */}

      <main>
        {/* ==================================================
            HERO
        ================================================== */}

        <section
          ref={heroRef}
          id="home"
          className="hero-section relative min-h-screen overflow-hidden"
        >
          {/* Mouse Ambient Light */}
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(212,175,55,0.10), transparent 28%)`,
            }}
          />

          {/* Architectural Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="hero-grid absolute inset-0"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
              }}
            />

            <div className="absolute left-[12%] top-0 h-full w-px bg-white/[0.04]" />
            <div className="absolute left-[25%] top-0 h-full w-px bg-white/[0.025]" />
            <div className="absolute right-[15%] top-0 h-full w-px bg-[#D4AF37]/[0.08]" />

            <div className="absolute left-0 top-[30%] h-px w-full bg-white/[0.04]" />
            <div className="absolute left-0 top-[70%] h-px w-full bg-white/[0.025]" />

            {/* Giant A */}
            <div
              className="pointer-events-none absolute right-[-5%] top-1/2 -translate-y-1/2 select-none text-[50vw] font-bold leading-none text-white/[0.018]"
              style={{
                transform: `translateY(calc(-50% + ${scrollY * -0.05}px))`,
              }}
            >
              A
            </div>
          </div>

          {/* Hero Glow */}
          <div className="absolute right-[10%] top-[25%] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.07] blur-[140px]" />

          <div className="relative z-10 flex min-h-screen items-center px-6 pb-24 pt-36 md:px-12 lg:px-20">
            <div className="w-full">
              <div className="max-w-7xl">
                {/* Eyebrow */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#D4AF37]" />
                  <p className="text-[10px] tracking-[0.35em] text-[#D4AF37] md:text-xs">
                    REAL ESTATE · CONSTRUCTION · INVESTMENT
                  </p>
                </div>

                {/* Main Heading */}
                <h1 className="hero-title max-w-6xl text-[18vw] font-light leading-[0.78] tracking-[-0.07em] sm:text-[15vw] md:text-[12vw] lg:text-[10vw]">
                  WE BUILD
                  <br />
                  <span className="text-[#D4AF37]">VALUE.</span>
                </h1>

                {/* Description */}
                <div className="mt-12 grid max-w-5xl gap-10 md:grid-cols-2 md:items-end">
                  <p className="max-w-xl text-sm leading-7 text-white/50 md:text-base">
                    ALMAWRID brings together real estate investment,
                    construction, general contracting, and strategic consulting
                    to transform opportunities into tangible, lasting value.
                  </p>

                  <div className="md:justify-self-end">
                    <p className="mb-4 text-[9px] tracking-[0.3em] text-white/25">
                      OUR DIRECTION
                    </p>

                    <p className="max-w-sm text-sm leading-6 text-white/60">
                      Think strategically.
                      <br />
                      Build precisely.
                      <br />
                      Create lasting value.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-12 flex flex-wrap items-center gap-5">
                  <a
                    href="#about"
                    className="group relative overflow-hidden border border-[#D4AF37] px-8 py-4 text-[10px] tracking-[0.25em] text-[#D4AF37]"
                  >
                    <span className="relative z-10 transition-colors group-hover:text-black">
                      DISCOVER ALMAWRID
                    </span>

                    <span className="absolute inset-0 -translate-x-full bg-[#D4AF37] transition-transform duration-500 group-hover:translate-x-0" />
                  </a>

                  <a
                    href="#contact"
                    className="group text-[10px] tracking-[0.25em] text-white/45 transition hover:text-white"
                  >
                    START A CONVERSATION
                    <span className="ml-3 inline-block transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Hero Information */}
              <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between md:left-12 md:right-12 lg:left-20 lg:right-20">
                <div>
                  <p className="text-[8px] tracking-[0.3em] text-white/25">
                    BAGHDAD · IRAQ
                  </p>
                </div>

                <div className="hidden items-center gap-4 md:flex">
                  <span className="text-[8px] tracking-[0.3em] text-white/25">
                    SCROLL TO EXPLORE
                  </span>
                  <span className="h-10 w-px bg-[#D4AF37]/50" />
                </div>

                <div>
                  <p className="text-[8px] tracking-[0.3em] text-[#D4AF37]">
                    01 — 06
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            STATEMENT
        ================================================== */}

        <section className="relative overflow-hidden border-y border-white/10 px-6 py-32 md:px-12 lg:px-20">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#D4AF37]/[0.025]" />

          <div className="relative z-10 max-w-6xl">
            <div className="mb-10 flex items-center gap-4">
              <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
                01
              </span>
              <span className="h-px w-12 bg-[#D4AF37]/50" />
              <span className="text-[9px] tracking-[0.3em] text-white/25">
                THE ALMAWRID IDEA
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              From opportunity
              <br />
              <span className="text-white/25">to reality.</span>
            </h2>

            <p className="mt-12 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
              Every opportunity begins with an idea. Our role is to understand
              it, shape it, and create the conditions for it to become real.
            </p>
          </div>
        </section>

        {/* ==================================================
            ABOUT
        ================================================== */}

        <section
          id="about"
          className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20"
        >
          <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/[0.025] blur-[150px]" />

          <div className="relative z-10 grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
                  02
                </span>
                <span className="h-px w-12 bg-[#D4AF37]/50" />
                <span className="text-[9px] tracking-[0.3em] text-white/25">
                  ABOUT ALMAWRID
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl">
                We think
                <br />
                beyond
                <br />
                <span className="text-white/25">real estate.</span>
              </h2>
            </div>

            <div className="lg:pt-24">
              <p className="max-w-2xl text-xl font-light leading-9 text-white/65 md:text-2xl">
                ALMAWRID is built around a simple principle: meaningful value
                is created when strategic thinking and disciplined execution
                work together.
              </p>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/35">
                Our work extends across real estate investment, construction,
                general contracting, and consulting. We approach each
                opportunity with a long-term perspective and an emphasis on
                clarity, quality, and execution.
              </p>

              {/* Values */}
              <div className="mt-20 border-t border-white/10">
                {values.map((value) => (
                  <div
                    key={value.number}
                    className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[70px_180px_1fr] md:items-start"
                  >
                    <span className="text-[10px] text-[#D4AF37]">
                      {value.number}
                    </span>

                    <h3 className="text-sm tracking-[0.2em] transition group-hover:text-[#D4AF37]">
                      {value.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-white/35">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            PRINCIPLES STRIP
        ================================================== */}

        <section className="overflow-hidden border-y border-white/10 py-6">
          <div className="flex min-w-max animate-marquee">
            {[...principles, ...principles].map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center">
                <span className="px-8 text-[10px] tracking-[0.35em] text-white/25">
                  {item}
                </span>
                <span className="text-[#D4AF37]">✦</span>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SERVICES
        ================================================== */}

        <section
          id="services"
          className="relative overflow-hidden border-b border-white/10 px-6 py-32 md:px-12 lg:px-20"
        >
          <div className="absolute right-[-10%] top-1/3 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/[0.035] blur-[180px]" />

          <div className="relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
                    03
                  </span>
                  <span className="h-px w-12 bg-[#D4AF37]/50" />
                  <span className="text-[9px] tracking-[0.3em] text-white/25">
                    WHAT WE DO
                  </span>
                </div>

                <h2 className="mt-8 text-5xl font-light tracking-[-0.04em] md:text-7xl">
                  Our
                  <br />
                  services.
                </h2>
              </div>

              <p className="max-w-md self-end text-sm leading-7 text-white/35">
                Integrated capabilities connecting investment, construction,
                execution, and strategic thinking under one direction.
              </p>
            </div>

            {/* Service Navigation */}
            <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border-t border-white/10">
                {services.map((service, index) => (
                  <button
                    key={service.number}
                    onMouseEnter={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className="group flex w-full items-start gap-5 border-b border-white/10 py-7 text-left"
                  >
                    <span className="pt-1 text-[10px] text-[#D4AF37]">
                      {service.number}
                    </span>

                    <div>
                      <h3
                        className={`text-xl font-light tracking-tight transition md:text-2xl ${
                          activeService === index
                            ? "text-[#D4AF37]"
                            : "text-white"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p className="mt-2 text-[9px] tracking-[0.25em] text-white/25">
                        {service.short}
                      </p>
                    </div>

                    <span
                      className={`ml-auto text-xl transition-all ${
                        activeService === index
                          ? "translate-x-0 text-[#D4AF37] opacity-100"
                          : "-translate-x-2 text-white/10 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Service */}
              <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-white/[0.015] p-8 md:p-12">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/[0.05] blur-[100px]" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-[#D4AF37]">
                      {services[activeService].number}
                    </span>

                    <span className="text-[9px] tracking-[0.3em] text-white/20">
                      ALMAWRID
                    </span>
                  </div>

                  <h3 className="mt-20 text-4xl font-light tracking-[-0.03em] md:text-6xl">
                    {services[activeService].title}
                  </h3>

                  <p className="mt-5 text-[9px] tracking-[0.3em] text-[#D4AF37]">
                    {services[activeService].short}
                  </p>

                  <p className="mt-8 max-w-xl text-sm leading-7 text-white/45">
                    {services[activeService].description}
                  </p>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {services[activeService].details.map((detail) => (
                      <div
                        key={detail}
                        className="border border-white/10 px-4 py-4 text-[9px] tracking-[0.15em] text-white/40"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 text-[90px] font-light leading-none text-white/[0.025]">
                  {services[activeService].number}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            FEATURED EXECUTION
        ================================================== */}

        <section className="relative overflow-hidden border-b border-white/10 px-6 py-32 md:px-12 lg:px-20">
          <div className="relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
                  04
                </span>
                <span className="h-px w-12 bg-[#D4AF37]/50" />
                <span className="text-[9px] tracking-[0.3em] text-white/25">
                  SELECTED EXECUTION
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl">
                AL NIDAA
                <br />
                <span className="text-white/25">MOSQUE.</span>
              </h2>

              <p className="mt-10 max-w-xl text-base leading-8 text-white/45">
                A built expression of ALMAWRID&apos;s construction capability.
                General contracting and construction execution translating
                planning and engineering into a completed architectural work.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <span className="h-px w-16 bg-[#D4AF37]" />
                <span className="text-[9px] tracking-[0.3em] text-white/30">
                  BUILT BY ALMAWRID
                </span>
              </div>
            </div>

            {/* Architectural Artwork */}
            <div className="relative aspect-square overflow-hidden border border-[#D4AF37]/20">
              <div className="absolute inset-0 architectural-art" />

              <div className="absolute inset-8 border border-[#D4AF37]/20" />

              <div className="absolute inset-16 border border-white/[0.06]" />

              <div className="absolute left-1/2 top-0 h-full w-px bg-[#D4AF37]/20" />

              <div className="absolute left-0 top-1/2 h-px w-full bg-[#D4AF37]/20" />

              {/* Abstract Architecture */}
              <div className="absolute bottom-[20%] left-1/2 h-[35%] w-[55%] -translate-x-1/2 border border-[#D4AF37]/30">
                <div className="absolute left-[15%] top-0 h-full w-px bg-[#D4AF37]/20" />
                <div className="absolute right-[15%] top-0 h-full w-px bg-[#D4AF37]/20" />

                <div className="absolute bottom-0 left-1/2 h-[65%] w-[18%] -translate-x-1/2 border-x border-t border-[#D4AF37]/30" />
              </div>

              <div className="absolute left-1/2 top-[25%] h-16 w-16 -translate-x-1/2 rotate-45 border border-[#D4AF37]/30" />

              <div className="absolute bottom-7 left-7">
                <p className="text-[8px] tracking-[0.3em] text-white/25">
                  ARCHITECTURAL EXECUTION
                </p>
              </div>

              <div className="absolute right-7 top-7">
                <p className="text-[8px] tracking-[0.3em] text-[#D4AF37]">
                  AL NIDAA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            PROCESS
        ================================================== */}

        <section className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.025]" />

          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
                05
              </span>
              <span className="h-px w-12 bg-[#D4AF37]/50" />
              <span className="text-[9px] tracking-[0.3em] text-white/25">
                HOW WE WORK
              </span>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl">
                From idea
                <br />
                <span className="text-white/25">to execution.</span>
              </h2>

              <p className="max-w-lg self-end text-sm leading-7 text-white/35">
                A disciplined process allows us to move from an initial
                opportunity to a practical path forward without losing sight
                of the original objective.
              </p>
            </div>

            <div className="mt-24 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <div
                  key={item.number}
                  className={`group relative border-b border-white/10 p-7 transition hover:bg-white/[0.02] lg:border-b-0 ${
                    index !== process.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#D4AF37]">
                      {item.number}
                    </span>

                    <span className="text-[9px] text-white/15">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-24">
                    <h3 className="text-xl font-light tracking-[0.05em] transition group-hover:text-[#D4AF37]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-white/35">
                      {item.text}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            PHILOSOPHY
        ================================================== */}

        <section className="relative overflow-hidden border-y border-white/10 px-6 py-32 md:px-12 lg:px-20">
          <div className="absolute inset-0 bg-[#D4AF37]/[0.015]" />

          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <p className="text-[9px] tracking-[0.35em] text-[#D4AF37]">
              THE ALMAWRID STANDARD
            </p>

            <h2 className="mt-10 text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
              Think clearly.
              <br />
              Build precisely.
              <br />
              <span className="text-white/25">Create meaningfully.</span>
            </h2>

            <div className="mx-auto mt-12 h-px w-20 bg-[#D4AF37]" />
          </div>
        </section>

        {/* ==================================================
            CONTACT
        ================================================== */}

        <section
          id="contact"
          className="relative overflow-hidden px-6 py-36 md:px-12 lg:px-20"
        >
          <div className="absolute right-[-10%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.06] blur-[160px]" />

          <div className="absolute inset-y-0 right-[20%] hidden w-px bg-white/[0.025] lg:block" />

          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
                06
              </span>
              <span className="h-px w-12 bg-[#D4AF37]/50" />
              <span className="text-[9px] tracking-[0.3em] text-white/25">
                CONTACT
              </span>
            </div>

            <h2 className="mt-10 max-w-6xl text-6xl font-light leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[9vw]">
              Let&apos;s build
              <br />
              <span className="text-white/25">what comes next.</span>
            </h2>

            <div className="mt-20 grid gap-10 lg:grid-cols-2">
              <div>
                <p className="max-w-lg text-base leading-8 text-white/40">
                  Whether the opportunity is an investment, construction
                  project, or strategic requirement, start the conversation
                  with ALMAWRID.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:almawredcompany556@gmail.com"
                  className="group flex items-center justify-between border border-white/10 px-6 py-5 transition hover:border-[#D4AF37]"
                >
                  <span className="text-sm text-white/55 transition group-hover:text-white">
                    almawredcompany556@gmail.com
                  </span>

                  <span className="text-[#D4AF37] transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>

                <a
                  href="tel:+9647775197580"
                  className="group flex items-center justify-between border border-white/10 px-6 py-5 transition hover:border-[#D4AF37]"
                >
                  <span className="text-sm text-white/55 transition group-hover:text-white">
                    +964 777 519 7580
                  </span>

                  <span className="text-[#D4AF37] transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-white/10 bg-[#040404] px-6 py-12 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-2xl tracking-[0.3em]">ALMAWRID</p>

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/30">
              Real estate investment, construction, general contracting, and
              strategic consulting.
            </p>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
              NAVIGATION
            </p>

            <div className="mt-5 flex flex-col gap-3 text-xs text-white/35">
              <a href="#home" className="transition hover:text-white">
                HOME
              </a>

              <a href="#about" className="transition hover:text-white">
                ABOUT
              </a>

              <a href="#services" className="transition hover:text-white">
                SERVICES
              </a>

              <a href="#contact" className="transition hover:text-white">
                CONTACT
              </a>
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] text-[#D4AF37]">
              LOCATION
            </p>

            <p className="mt-5 text-xs leading-6 text-white/35">
              Baghdad
              <br />
              Iraq
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-[9px] tracking-[0.2em] text-white/20 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} ALMAWRID</span>

          <span>REAL ESTATE · CONSTRUCTION · INVESTMENT</span>

          <span>BUILT IN BAGHDAD</span>
        </div>
      </footer>

      {/* ==================================================
          GLOBAL STYLES
      ================================================== */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050505;
        }

        ::selection {
          background: #d4af37;
          color: #050505;
        }

        ::-webkit-scrollbar {
          width: 5px;
        }

        ::-webkit-scrollbar-track {
          background: #050505;
        }

        ::-webkit-scrollbar-thumb {
          background: #d4af37;
        }

        .intro-grid {
          background-image:
            linear-gradient(
              to right,
              rgba(212, 175, 55, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(212, 175, 55, 0.08) 1px,
              transparent 1px
            );
          background-size: 80px 80px;
          mask-image: radial-gradient(
            circle at center,
            black 0%,
            transparent 75%
          );
        }

        .intro-glow {
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.13) 0%,
            rgba(212, 175, 55, 0.03) 35%,
            transparent 70%
          );
          animation: introGlow 3s ease-in-out infinite;
        }

        .intro-logo {
          animation: introLogo 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .intro-progress {
          width: 0%;
          animation: introProgress 3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        .hero-grid {
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );
          background-size: 120px 120px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
        }

        .hero-title {
          animation: heroTitle 1.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .architectural-art {
          background:
            linear-gradient(
              135deg,
              transparent 30%,
              rgba(212, 175, 55, 0.035) 30%,
              transparent 55%
            ),
            linear-gradient(
              315deg,
              transparent 40%,
              rgba(255, 255, 255, 0.025) 40%,
              transparent 65%
            );
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        @keyframes introGlow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.6;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
        }

        @keyframes introLogo {
          from {
            opacity: 0;
            transform: translateY(25px);
            letter-spacing: 0.7em;
          }

          to {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 0.3em;
          }
        }

        @keyframes introProgress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }

        @keyframes heroTitle {
          from {
            opacity: 0;
            transform: translateY(60px);
            filter: blur(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}