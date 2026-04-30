import { useState, useEffect } from 'react'
import './App.css'

const features = [
  {
    icon: '👁',
    title: 'Blink rate tracking',
    desc: 'Monitors how often you blink, which is the single best predictor of screen strain and waning focus.',
  },
  {
    icon: '🎯',
    title: 'Focus score',
    desc: 'A real-time 0–100 score combining blink rate, head stability, and break compliance.',
  },
  {
    icon: '⏱',
    title: '20-20-20 breaks',
    desc: 'Prompts you every 20 minutes to look 20 feet away for 20 seconds. Clinically proven.',
  },
  {
    icon: '📏',
    title: 'Screen distance',
    desc: "Estimates how far you are from your screen. Too close? You'll know.",
  },
  {
    icon: '🔒',
    title: 'Fully local',
    desc: 'No cloud. No accounts. No video ever leaves your machine. Your webcam, your data.',
  },
  {
    icon: '📊',
    title: 'Session history',
    desc: 'Review past sessions to spot patterns: when you focus best, when strain builds.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Launch Screyn',
    desc: 'Run the app. It opens your webcam and starts the CV pipeline.',
  },
  {
    num: '02',
    title: 'Auto-calibrates',
    desc: '60 seconds of silent calibration tunes the blink detector to your eyes.',
  },
  {
    num: '03',
    title: 'Work normally',
    desc: 'The dashboard shows live focus score, blink rate, and break reminders.',
  },
]

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className={`page ${loaded ? 'is-loaded' : ''}`}>
      <div className="grid-bg" />

      <div className="content">
        <nav className="nav fade-down">
          <div className="nav-logo mono">SCREYN</div>
          <a href="https://www.seyn.co.uk" className="nav-link">SEYN ecosystem</a>
        </nav>

        <section className="hero fade-up">
          <div className="hero-badge">Part of SEYN</div>
          <h1 className="hero-title">Your screen time,<br/>optimised for focus.</h1>
          <p className="hero-subtitle">
            Screyn uses computer vision to track your blink rate, posture, and attention
            in real-time, to help you understand when you're in flow and when to step away.
          </p>
          <div className="hero-actions">
            <a
              href="https://github.com/arjandhinsa/screyn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub
            </a>
            <span className="hero-note">Desktop app postponed</span>
          </div>
        </section>

        <section className="features fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="section-label">What it tracks</div>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="how-it-works fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="section-label">How it works</div>
          <div className="steps">
            {steps.map((s) => (
              <div key={s.num} className="step">
                <div className="step-num mono">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="privacy fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="privacy-card">
            <h3>Privacy by design</h3>
            <p>
              Screyn processes every frame in memory and discards it immediately.
              No video is recorded. No data leaves your machine. No cloud. No account.
              This isn't a feature, it's baked into the architecture.
            </p>
          </div>
        </section>

        <footer className="footer fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="footer-logo mono">SEYN</div>
          <p>Tools for who you're destined to become.</p>
        </footer>
      </div>
    </div>
  )
}
