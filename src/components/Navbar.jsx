import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import RegisterPopup from "./RegisterPopup";
import logo from "../photos/logo.png";
import Sviet from "../photos/SVIET-Logo.png";

const NAV_LINKS = [
  { label: "Home",      to: "/#home"      },
  { label: "Overview",  to: "/#overview"  },
  { label: "Agenda",    to: "/#agenda"    },
  { label: "Speakers",  to: "/#speakers"  },
  { label: "Contact",   to: "/contact"    },
];

const Navbar = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [showPopup,  setShowPopup]  = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [hideBar,    setHideBar]    = useState(false);
  const lastScrollY = useRef(0);
  const location    = useLocation();

  /* ── Scroll behaviour: shrink + hide-on-scroll-down ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHideBar(y > 120 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close drawer on route change ── */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  /* ── Lock body scroll when mobile drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu  = () => setIsOpen(false);
  const openPopup  = () => { setShowPopup(true); closeMenu(); };

  const getIsActive = (to) => {
    const isHashLink = to.startsWith("/#");
    if (isHashLink) {
      const targetHash = to.substring(1);
      return location.pathname === "/" && (location.hash === targetHash || (!location.hash && targetHash === "#home"));
    }
    return location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  };

  return (
    <>
      {/* ── Top announcement bar ─────────────────────────── */}
      <div className={`nav-topbar${hideBar ? " nav-topbar--hidden" : ""}`}>
        <span className="nav-topbar__dot" />
        <p>
          ICETA&nbsp;2026 &nbsp;·&nbsp; International Conference on Emerging Technologies &amp; Applications
          &nbsp;&nbsp;<span className="nav-topbar__sep">|</span>&nbsp;&nbsp;
          📅&nbsp;September 18–20, 2026 &nbsp;·&nbsp; SVIET Campus, Banur, Punjab
        </p>
      </div>

      {/* ── Main navbar ──────────────────────────────────── */}
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}${hideBar ? " navbar--hidden" : ""}`}>

        {/* Logo cluster */}
        <Link to="/" className="navbar__brand" onClick={closeMenu} aria-label="Go to homepage">
          <img src={Sviet} alt="SVIET"           className="navbar__logo navbar__logo--sviet" />
          <span className="navbar__brand-divider" aria-hidden="true" />
          <img src={logo}  alt="ICETA 2026 Logo" className="navbar__logo navbar__logo--conf"  />
          <div className="navbar__brand-text">
            <span className="navbar__brand-title">ICETA 2026</span>
            <span className="navbar__brand-sub">International Conference</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = getIsActive(to);
            return (
              <li key={label}>
                <Link
                  to={to}
                  className={`navbar__link${isActive && to !== "/#home" ? " navbar__link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__btn navbar__btn--register"
            onClick={openPopup}
          >
            <span>Register Now</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${isOpen ? " is-open" : ""}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span className="navbar__bar" />
          <span className="navbar__bar" />
          <span className="navbar__bar" />
        </button>
      </nav>

      {/* ── Mobile drawer ────────────────────────────────── */}
      <div
        className={`nav-drawer${isOpen ? " nav-drawer--open" : ""}`}
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="nav-drawer__header">
          <img src={logo} alt="ICETA 2026" className="nav-drawer__logo" />
          <span className="nav-drawer__title">ICETA 2026</span>
        </div>

        <nav className="nav-drawer__nav">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = getIsActive(to);
            return (
              <Link
                key={label}
                to={to}
                className={`nav-drawer__link${isActive ? " active" : ""}`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-drawer__footer">
          <button
            type="button"
            className="nav-drawer__register"
            onClick={openPopup}
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`nav-backdrop${isOpen ? " nav-backdrop--visible" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Register Popup */}
      {showPopup && <RegisterPopup closePopup={() => setShowPopup(false)} startWithForm={true} />}
    </>

  );
};

export default Navbar;