"use client";

import { useEffect, useState } from "react";

const navigation = [
  {
    number: "01",
    label: "HOME",
    href: "#home",
  },
  {
    number: "02",
    label: "ABOUT",
    href: "#about",
  },
  {
    number: "03",
    label: "SERVICES",
    href: "#services",
  },
  {
    number: "04",
    label: "CONTACT",
    href: "#contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP / GLOBAL NAVBAR                                  */}
      {/* ========================================================= */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-[100]
          w-full
          transition-all
          duration-500
          ease-out
          ${
            scrolled
              ? "border-b border-white/[0.08] bg-[#080808]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl"
              : "border-b border-transparent bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
            transition-all
            duration-500
            lg:px-10
            ${scrolled ? "h-[72px]" : "h-20"}
          `}
        >
          {/* ===================================================== */}
          {/* LOGO                                                   */}
          {/* ===================================================== */}

          <a
            href="#home"
            onClick={closeMenu}
            aria-label="ALMAWRID Home"
            className="
              group
              relative
              z-[110]
              inline-flex
              flex-col
              text-xl
              font-semibold
              tracking-[0.35em]
              text-[#D4AF37]
              outline-none
              transition-all
              duration-300
              hover:text-[#e5c65a]
              focus-visible:ring-1
              focus-visible:ring-[#D4AF37]
              focus-visible:ring-offset-4
              focus-visible:ring-offset-[#080808]
            "
          >
            <span>ALMAWRID</span>

            <span
              className="
                mt-1
                block
                h-px
                w-0
                bg-[#D4AF37]
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />
          </a>

          {/* ===================================================== */}
          {/* DESKTOP NAVIGATION                                    */}
          {/* ===================================================== */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex lg:gap-10"
          >
            {navigation.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="
                  group
                  relative
                  flex
                  items-center
                  py-3
                  text-[10px]
                  font-medium
                  tracking-[0.25em]
                  text-white/60
                  transition-all
                  duration-300
                  hover:text-white
                "
              >
                <span>{item.label}</span>

                <span
                  className="
                    absolute
                    bottom-1
                    left-0
                    h-px
                    w-0
                    bg-[#D4AF37]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            {/* =================================================== */}
            {/* CONTACT BUTTON                                     */}
            {/* =================================================== */}

            <a
              href="#contact"
              className="
                group
                relative
                ml-3
                inline-flex
                items-center
                justify-center
                overflow-hidden
                border
                border-[#D4AF37]/70
                px-6
                py-3
                text-[10px]
                font-medium
                tracking-[0.2em]
                text-[#D4AF37]
                transition-all
                duration-500
                hover:border-[#D4AF37]
                hover:text-black
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-[#D4AF37]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-0
                "
              />

              <span className="relative z-10">CONTACT US</span>
            </a>
          </nav>

          {/* ===================================================== */}
          {/* MOBILE MENU BUTTON                                    */}
          {/* ===================================================== */}

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="
              group
              relative
              z-[110]
              flex
              h-11
              w-11
              items-center
              justify-center
              border
              border-white/[0.12]
              bg-white/[0.02]
              transition-all
              duration-300
              hover:border-[#D4AF37]/60
              hover:bg-[#D4AF37]/[0.04]
              md:hidden
            "
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative flex h-4 w-5 flex-col justify-center">
              <span
                className={`
                  absolute
                  left-0
                  h-px
                  w-5
                  bg-[#D4AF37]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "top-1/2 rotate-45"
                      : "top-[3px] rotate-0"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  h-px
                  w-5
                  bg-[#D4AF37]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "top-1/2 -rotate-45"
                      : "bottom-[3px] rotate-0"
                  }
                `}
              />
            </span>
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE NAVIGATION                                        */}
      {/* ========================================================= */}

      <div
        aria-hidden={!menuOpen}
        className={`
          fixed
          inset-0
          z-[90]
          bg-[#080808]
          transition-all
          duration-500
          ease-out
          md:hidden
          ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }
        `}
      >
        {/* ===================================================== */}
        {/* MOBILE BACKGROUND GRID                                */}
        {/* ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[18%] top-0 h-full w-px bg-white/[0.035]" />

          <div className="absolute left-[50%] top-0 h-full w-px bg-white/[0.025]" />

          <div className="absolute right-[18%] top-0 h-full w-px bg-white/[0.035]" />

          <div className="absolute left-0 top-[30%] h-px w-full bg-white/[0.025]" />

          <div className="absolute left-0 top-[70%] h-px w-full bg-white/[0.025]" />
        </div>

        {/* ===================================================== */}
        {/* BACKGROUND LETTER                                     */}
        {/* ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            top-1/2
            -translate-y-1/2
            select-none
            text-[22rem]
            font-black
            leading-none
            text-white/[0.018]
          "
        >
          A
        </div>

        {/* ===================================================== */}
        {/* MOBILE CONTENT                                        */}
        {/* ===================================================== */}

        <div className="relative flex min-h-screen flex-col justify-center px-8 pb-20 pt-24">
          {/* Small label */}

          <div
            className={`
              mb-10
              transition-all
              delay-100
              duration-700
              ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <p className="text-[9px] font-medium tracking-[0.45em] text-[#D4AF37]">
              ALMAWRID
            </p>

            <p className="mt-3 text-[8px] tracking-[0.3em] text-white/25">
              REAL ESTATE INVESTMENT
            </p>
          </div>

          {/* Navigation */}

          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <a
                key={item.number}
                href={item.href}
                onClick={closeMenu}
                className={`
                  group
                  flex
                  items-center
                  gap-5
                  border-b
                  border-white/[0.08]
                  py-6
                  transition-all
                  duration-700
                  ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }
                `}
                style={{
                  transitionDelay: menuOpen
                    ? `${150 + index * 70}ms`
                    : "0ms",
                }}
              >
                {/* Number */}

                <span
                  className="
                    w-7
                    text-[9px]
                    tracking-[0.25em]
                    text-[#D4AF37]/60
                    transition-all
                    duration-300
                    group-hover:text-[#D4AF37]
                  "
                >
                  {item.number}
                </span>

                {/* Label */}

                <span
                  className="
                    text-2xl
                    font-light
                    tracking-[0.12em]
                    text-white
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    group-hover:text-[#D4AF37]
                  "
                >
                  {item.label}
                </span>

                {/* Arrow */}

                <span
                  className="
                    ml-auto
                    translate-x-2
                    text-lg
                    text-[#D4AF37]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* =================================================== */}
          {/* MOBILE FOOTER INFO                                  */}
          {/* =================================================== */}

          <div
            className={`
              mt-12
              transition-all
              delay-500
              duration-700
              ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
          >
            <div className="mb-8 h-px w-12 bg-[#D4AF37]" />

            <p className="text-[8px] tracking-[0.3em] text-white/25">
              BAGHDAD — IRAQ
            </p>

            <a
              href="mailto:almawredcompany556@gmail.com"
              className="mt-3 block text-[9px] tracking-[0.08em] text-white/40 transition-colors hover:text-[#D4AF37]"
            >
              almawredcompany556@gmail.com
            </a>

            <a
              href="tel:+9647775197580"
              className="mt-2 block text-[9px] tracking-[0.15em] text-white/40 transition-colors hover:text-[#D4AF37]"
            >
              +964 777 519 7580
            </a>
          </div>
        </div>
      </div>
    </>
  );
}