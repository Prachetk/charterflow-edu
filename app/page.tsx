"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${scrollY * 0.08}px, ${scrollY * 0.05}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(-${scrollY * 0.06}px, ${scrollY * 0.08}px)`;
      }

      // Fade hero text as you scroll
      if (heroRef.current) {
        const opacity = Math.max(0, 1 - scrollY / 400);
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll-reveal sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #050608;
          color: #e8eaf0;
          font-family: -apple-system, 'SF Pro Display', 'Segoe UI', sans-serif;
          overflow-x: hidden;
        }

        /* Smooth scroll */
        html { scroll-behavior: smooth; }

        /* ---- NAV ---- */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(5,6,8,0.6);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .nav-logo {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff, #a0aec0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: #fff; }

        .nav-cta {
          background: #fff;
          color: #000;
          border: none;
          padding: 9px 22px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .nav-cta:hover { opacity: 0.85; }

        /* ---- HERO ---- */
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          will-change: transform, opacity;
        }

        .hero-eyebrow {
          display: inline-block;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 24px;
          padding: 6px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
        }

        .hero h1 {
          font-size: clamp(40px, 6vw, 80px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.03em;
          max-width: 820px;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.55) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 24px;
        }

        .hero p {
          font-size: clamp(16px, 2vw, 20px);
          color: rgba(255,255,255,0.45);
          max-width: 520px;
          line-height: 1.65;
          margin: 0 auto 40px;
          font-weight: 300;
        }

        .hero-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #fff;
          color: #000;
          border: none;
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: rgba(255,255,255,0.88);
          transform: scale(1.02);
        }

        .btn-secondary {
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 14px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.4);
          color: #fff;
        }

        /* ---- ORBS (background fluid blobs) ---- */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          pointer-events: none;
          will-change: transform;
          transition: transform 0.1s linear;
        }

        .orb-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, #4f8ef7, transparent 70%);
          top: -100px; left: -100px;
        }

        .orb-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #7c5cfc, transparent 70%);
          bottom: -80px; right: -80px;
        }

        .orb-3 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #2ee89a, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0.08;
        }

        /* ---- SCROLL REVEAL ---- */
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }

        /* ---- STATS STRIP ---- */
        .stats-strip {
          padding: 80px 48px;
          display: flex;
          justify-content: center;
          gap: 80px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #fff, #7c5cfc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          margin-top: 6px;
          font-weight: 300;
        }

        /* ---- FEATURES ---- */
        .features {
          padding: 120px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-label {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.1;
          max-width: 600px;
          background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 64px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          transition: border-color 0.3s, background 0.3s;
        }

        .feature-card:hover {
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
        }

        .feature-icon {
          font-size: 28px;
          margin-bottom: 16px;
        }

        .feature-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .feature-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          font-weight: 300;
        }

        /* ---- CTA SECTION ---- */
        .cta-section {
          padding: 120px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(79,142,247,0.12), transparent 70%);
          pointer-events: none;
        }

        .cta-section h2 {
          font-size: clamp(32px, 5vw, 60px);
          font-weight: 700;
          letter-spacing: -0.03em;
          max-width: 700px;
          margin: 0 auto 20px;
          background: linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-section p {
          color: rgba(255,255,255,0.4);
          font-size: 18px;
          margin-bottom: 40px;
          font-weight: 300;
        }

        /* ---- FOOTER ---- */
        footer {
          padding: 40px 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        footer .logo {
          font-size: 16px;
          font-weight: 700;
          background: linear-gradient(135deg, #fff, #a0aec0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        footer p {
          font-size: 13px;
          color: rgba(255,255,255,0.25);
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-logo">CharterFlow Edu</div>
        <ul className="nav-links">
          <li><a href="#">Courses</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <button className="nav-cta">Enroll Now</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="orb orb-1" ref={orb1Ref} />
        <div className="orb orb-2" ref={orb2Ref} />
        <div className="orb orb-3" />

        <div className="hero-content" ref={heroRef}>
          <span className="hero-eyebrow">ACCA Exam Preparation · India</span>
          <h1>World-Class ACCA Preparation.
              Priced for Every Indian Student.
          .</h1>
          <p>
            Structured lectures, real exam technique, and expert support —
            built for every Indian student who's serious about qualifying.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-secondary">Watch Free Preview →</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="stat reveal">
          <div className="stat-number">14</div>
          <div className="stat-label">ACCA Papers Covered</div>
        </div>
        <div className="stat reveal reveal-delay-1">
          <div className="stat-number">₹999</div>
          <div className="stat-label">Starting Price Per Paper</div>
        </div>
        <div className="stat reveal reveal-delay-2">
          <div className="stat-number">95%</div>
          <div className="stat-label">Student Pass Rate</div>
        </div>
        <div className="stat reveal reveal-delay-3">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Study Access</div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features">
        <p className="section-label reveal">Why CharterFlow</p>
        <h2 className="section-title reveal">Everything you need to pass. Nothing you don&apos;t.</h2>
        <div className="features-grid">
          {[
            { icon: "🎯", title: "Exam-Focused Teaching", desc: "Every lecture is built around what the examiner actually tests — no wasted time on theory that won't show up." },
            { icon: "📹", title: "HD Video Lectures", desc: "Watch at your own pace, pause, rewind, and rewatch until it clicks. Available 24/7 on any device." },
            { icon: "💬", title: "Direct Instructor Support", desc: "Get your questions answered by Charan — not a chatbot, not a forum. Real support from a real ACCA qualifier." },
            { icon: "📄", title: "Past Paper Walkthroughs", desc: "Detailed solutions to real past exam questions so you know exactly how to approach the paper on exam day." },
            { icon: "🗂️", title: "Structured Study Plans", desc: "A clear week-by-week plan that tells you exactly what to study and when, all the way to exam day." },
            { icon: "💰", title: "Priced for India", desc: "World-class ACCA prep at a fraction of what UK or Big 4 training costs. Quality without the price tag." },
          ].map((f, i) => (
            <div className={`feature-card reveal reveal-delay-${i % 3}`} key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="reveal">Ready to start your ACCA journey?</h2>
        <p className="reveal">Join students already preparing smarter.</p>
        <button className="btn-primary reveal">Browse Courses</button>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo">CharterFlow Edu</div>
        <p>© 2026 CharterFlow Edu. All rights reserved.</p>
      </footer>
    </>
  );
}