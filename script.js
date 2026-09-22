@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');

:root {
  --bg: #f5f7ff;
  --bg-strong: #eef2ff;
  --surface: rgba(255, 255, 255, 0.8);
  --surface-strong: #ffffff;
  --card: #ffffff;
  --primary: #5b4ae6;
  --primary-dark: #4335c6;
  --secondary: #34c3b6;
  --text: #1f2937;
  --muted: #5d6b82;
  --line: rgba(102, 112, 142, 0.18);
  --shadow: 0 20px 45px rgba(23, 32, 51, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Hind Siliguri', 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #f8f9ff 0%, #f3f7ff 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input {
  font: inherit;
}

.container {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(245, 247, 255, 0.8);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.15rem;
  font-weight: 700;
}

.brand-mark {
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), #7e6dff);
  color: #fff;
  box-shadow: 0 10px 22px rgba(91, 74, 230, 0.35);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-weight: 500;
}

.main-nav a:hover,
.site-footer a:hover {
  color: var(--primary);
}

.header-button,
.primary-btn,
.secondary-btn,
.copy-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.header-button,
.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: #fff;
  box-shadow: 0 12px 24px rgba(91, 74, 230, 0.28);
}

.header-button {
  padding: 10px 16px;
  font-weight: 700;
}

.primary-btn {
  padding: 14px 20px;
  font-weight: 700;
}

.secondary-btn {
  padding: 14px 20px;
  background: rgba(91, 74, 230, 0.08);
  color: var(--primary);
  border: 1px solid rgba(91, 74, 230, 0.16);
  font-weight: 700;
}

.primary-btn:hover,
.secondary-btn:hover,
.header-button:hover,
.copy-button:hover {
  transform: translateY(-1px);
}

.hero {
  padding: 72px 0 24px;
  background:
    radial-gradient(circle at top left, rgba(91, 74, 230, 0.12), transparent 26%),
    radial-gradient(circle at bottom right, rgba(52, 195, 182, 0.12), transparent 20%),
    linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0));
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 36px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 10px;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

.eyebrow-dark {
  color: var(--muted);
}

.hero-copy h1 {
  margin: 0;
  max-width: 640px;
  font-size: clamp(2.5rem, 5vw, 4.4rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.lead {
  margin-top: 18px;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.12rem;
  line-height: 1.8;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.mini-stats {
  list-style: none;
  padding: 0;
  margin: 34px 0 0;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.mini-stats li {
  min-width: 110px;
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.mini-stats strong {
  display: block;
  font-size: 1.4rem;
  color: var(--text);
}

.mini-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(91, 74, 230, 0.12);
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 20px;
}

.card-top {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-purple { background: #8b5cf6; }
.dot-blue { background: #60a5fa; }
.dot-green { background: #34d399; }

.prompt-preview {
  border-radius: 18px;
  background: linear-gradient(135deg, #f9f7ff, #eef7ff);
  border: 1px solid rgba(91, 74, 230, 0.08);
  padding: 24px 20px;
}

.preview-label {
  display: inline-block;
  margin-bottom: 12px;
  background: rgba(91, 74, 230, 0.08);
  color: var(--primary);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.8rem;
  font-weight: 700;
}

.prompt-preview h3 {
  margin: 0 0 12px;
  font-size: 1.6rem;
}

.prompt-preview p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.features,
.prompt-section,
.about {
  padding: 32px 0 12px;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 22px;
}

.feature-item {
  padding: 24px 20px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 10px 28px rgba(17, 24, 39, 0.04);
}

.icon {
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(91, 74, 230, 0.12), rgba(52, 195, 182, 0.10));
  font-size: 1.7rem;
  margin-bottom: 14px;
}

.feature-item h3 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.feature-item p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.prompt-header {
  align-items: center;
  margin-top: 18px;
}

.search-box {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: min(100%, 340px);
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 14px;
  box-shadow: 0 10px 26px rgba(17,24,39,0.03);
}

.search-box input {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--text);
  outline: none;
  font-size: 1rem;
}

.result-count {
  display: block;
  margin: 8px 0 18px;
  color: var(--muted);
  font-size: 0.95rem;
}

.prompt-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.prompt-card {
  display: flex;
  flex-direction: column;
  min-height: 260px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 20px;
  box-shadow: 0 12px 32px rgba(17,24,39,0.04);
}

.prompt-card .tag {
  align-self: flex-start;
  border-radius: 999px;
  background: rgba(91, 74, 230, 0.08);
  color: var(--primary);
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 700;
}

.prompt-card h3 {
  margin: 16px 0 10px;
  font-size: 1.25rem;
}

.prompt-card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.72;
  flex: 1;
}

.prompt-card .prompt-text {
  display: none;
}

.copy-button {
  align-self: flex-start;
  padding: 10px 14px;
  border: none;
  background: rgba(91, 74, 230, 0.1);
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
}

.copy-button.copied {
  background: rgba(52, 195, 182, 0.1);
  color: #0c766a;
}

.empty-state {
  margin-top: 18px;
  padding: 32px 18px;
  text-align: center;
  border-radius: 18px;
  border: 1px dashed rgba(91, 74, 230, 0.3);
  color: var(--muted);
  background: rgba(255,255,255,0.55);
}

.about {
  padding-bottom: 70px;
}

.about-box {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 28px;
  padding: 32px 30px;
  border-radius: 28px;
  background: linear-gradient(135deg, #f4f0ff, #eefbff);
  border: 1px solid rgba(91, 74, 230, 0.08);
}

.about-box h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.about-box p:last-child {
  margin: 0;
  color: var(--muted);
  line-height: 1.9;
  font-size: 1.02rem;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,0.5);
}

.footer-wrap {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: var(--muted);
}

@media (max-width: 920px) {
  .hero-grid,
  .about-box,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .nav-wrap,
  .section-heading,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .main-nav {
    width: 100%;
    justify-content: space-between;
    gap: 12px;
    font-size: 0.95rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .prompt-header {
    align-items: flex-start;
  }

  .search-box {
    width: 100%;
  }
}
