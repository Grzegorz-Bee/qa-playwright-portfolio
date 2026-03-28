import React from 'react';
import { Globe, Briefcase, Mail, ExternalLink, Code, Terminal, Database, Cloud } from 'lucide-react';
import Contact from './components/Contact';
import './styles/App.css';

const CustomIcon = ({ label, accent, children, viewBox = '0 0 24 24' }) => (
  <span
    className="custom-skill-icon"
    style={{ '--icon-accent': accent }}
    aria-hidden="true"
    title={label}
  >
    <svg viewBox={viewBox} focusable="false">
      {children}
    </svg>
  </span>
);

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="name" data-testid="portfolio-name">QA Automation Portfolio</h1>
        <p className="title" data-testid="portfolio-title">Software Quality Engineer | Test Automation Architect</p>
        <div className="social-links">
          <a href="https://github.com/Grzegorz-Bee" target="_blank" rel="noreferrer" data-testid="github-link">
            <Globe size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" data-testid="linkedin-link">
            <Briefcase size={20} /> LinkedIn
          </a>
          <a href="mailto:your.email@example.com">
            <Mail size={20} /> Contact
          </a>
        </div>
      </header>

      <section id="about" data-testid="about-section">
        <h2>About</h2>
        <p className="about-text" data-testid="about-text">
          Highly skilled QA Automation Engineer focused on building robust, scalable, and maintainable test automation solutions. 
          Expertise in modern web technologies and a strong advocate for shift-left testing and continuous integration.
        </p>
      </section>

      <section id="skills">
        <h2>Tech Stack</h2>
        <div className="grid" data-testid="tech-stack-grid">
          <div className="card" data-testid="languages-card">
            <div className="card-title"><Code size={20} /> Languages</div>
            <div className="skill-tags">
              <span className="tag"><i className="devicon-typescript-plain colored"></i> TypeScript</span>
              <span className="tag"><i className="devicon-javascript-plain colored"></i> JavaScript</span>
              <span className="tag"><i className="devicon-java-plain colored"></i> Java</span>
              <span className="tag"><i className="devicon-python-plain colored"></i> Python</span>
              <span className="tag"><i className="devicon-kotlin-plain colored"></i> Kotlin</span>
              <span className="tag"><i className="devicon-swift-plain colored"></i> Swift</span>
              <span className="tag"><i className="devicon-groovy-plain colored"></i> Groovy</span>
            </div>
          </div>
          <div className="card" data-testid="frameworks-card">
            <div className="card-title"><Terminal size={20} /> Frameworks</div>
            <div className="skill-tags">
              <span className="tag"><i className="devicon-playwright-plain colored"></i> Playwright</span>
              <span className="tag"><CustomIcon label="Cypress" accent="#69d3a7"><path fill="currentColor" d="M12 2.5a9.5 9.5 0 1 0 9.41 10.82h-3.02A6.75 6.75 0 1 1 12 5.25c1.63 0 3.12.57 4.28 1.52L13.9 9.15h7.6v-7.6L18.2 4.85A9.45 9.45 0 0 0 12 2.5Z" /></CustomIcon> Cypress</span>
              <span className="tag"><i className="devicon-selenium-original colored"></i> Selenium</span>
              <span className="tag"><CustomIcon label="JUnit" accent="#dc524a"><path fill="currentColor" d="M8.4 3.5h7.2v2.2H8.4zM9.7 7.1h4.6v6.3l2.87 4.97-1.9 1.09L12 14l-3.27 5.4-1.9-1.09 2.87-4.97z" /></CustomIcon> JUnit</span>
              <span className="tag"><CustomIcon label="Gatling" accent="#ff7a00"><path fill="currentColor" d="M5 19 11.2 5h2.16L19 19h-2.8l-1.03-2.65H8.63L7.5 19Zm4.52-4.82h4.8L12 8.23Z" /></CustomIcon> Gatling</span>
              <span className="tag"><CustomIcon label="Android" accent="#7cb342"><path fill="currentColor" d="M8.42 7.2 6.97 4.68l.74-.43 1.48 2.56a8.13 8.13 0 0 1 5.62 0l1.48-2.56.74.43-1.45 2.52A6.05 6.05 0 0 1 19 12.5V16a1 1 0 0 1-1 1h-1v3h-1.5v-3h-7v3H7v-3H6a1 1 0 0 1-1-1v-3.5c0-2.29 1.26-4.28 3.42-5.3ZM9 11.25a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm6 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z" /></CustomIcon> Android (Kotlin)</span>
              <span className="tag"><CustomIcon label="iOS" accent="#a2aaad"><path fill="currentColor" d="M15.24 12.03c.03 3.08 2.7 4.1 2.73 4.11-.02.07-.43 1.47-1.42 2.92-.86 1.24-1.75 2.48-3.16 2.5-1.39.03-1.83-.82-3.42-.82s-2.08.8-3.39.85c-1.36.05-2.4-1.36-3.27-2.59C1.54 16.45.18 11.95 2 8.86c.9-1.54 2.52-2.52 4.29-2.55 1.33-.02 2.58.9 3.42.9.84 0 2.4-1.12 4.05-.95.69.03 2.63.28 3.88 2.12-.1.06-2.31 1.34-2.4 3.65ZM12.66 4.48c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.69-3.02 1.55-.67.77-1.25 1.99-1.1 3.16 1.15.09 2.32-.58 3.05-1.43Z" /></CustomIcon> iOS (Swift)</span>
            </div>
          </div>
          <div className="card" data-testid="api-testing-card">
            <div className="card-title"><Database size={20} /> API Testing</div>
            <div className="skill-tags">
              <span className="tag"><CustomIcon label="Postman" accent="#ff6c37"><path fill="currentColor" d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5Zm3.7 6.36-2.83 6.65a1.1 1.1 0 0 1-.58.59l-2.55 1.09 1.09-2.55a1.1 1.1 0 0 1 .59-.58l6.64-2.84a.43.43 0 0 0 .23-.56.44.44 0 0 0-.56-.23Z" /></CustomIcon> Postman</span>
              <span className="tag"><CustomIcon label="RestAssured" accent="#3b82f6"><path fill="currentColor" d="M5 5h9a3 3 0 0 1 0 6H5Zm0 8h14v2H5Zm0 4h10v2H5Z" /></CustomIcon> RestAssured</span>
              <span className="tag"><CustomIcon label="Proxyman" accent="#8b5cf6"><path fill="currentColor" d="M12 3 4 7.5v9L12 21l8-4.5v-9Zm0 2.06 5.91 3.32L12 11.7 6.09 8.38Zm-6 4.84 5 2.82v5.95l-5-2.81Zm7 8.77v-5.95l5-2.82v5.96Z" /></CustomIcon> Proxyman</span>
            </div>
          </div>
          <div className="card" data-testid="cicd-card">
            <div className="card-title"><Cloud size={20} /> CI/CD & DevOps</div>
            <div className="skill-tags">
              <span className="tag"><i className="devicon-githubactions-plain colored"></i> GitHub Actions</span>
              <span className="tag"><i className="devicon-jenkins-line colored"></i> Jenkins</span>
              <span className="tag"><i className="devicon-docker-plain colored"></i> Docker</span>
              <span className="tag"><i className="devicon-kubernetes-plain colored"></i> Kubernetes</span>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-framework" data-testid="featured-framework-section">
        <h2>Featured Framework</h2>
        <div className="card" data-testid="featured-framework-card">
          <div className="card-title">Playwright POM Architecture</div>
          <p className="card-desc" data-testid="featured-framework-desc">
            A production-ready test automation framework using Playwright, TypeScript, and Page Object Model (POM). 
            Includes automatic reporting, retry logic, and multi-browser support.
          </p>
          <a href="https://github.com/Grzegorz-Bee/qa-playwright-portfolio" className="project-link" data-testid="featured-framework-link">
            View Repository <ExternalLink size={16} />
          </a>
        </div>
      </section>

      <Contact />

      <footer>
        <p>&copy; 2026 QA Portfolio. Built with React, Playwright and Vercel.</p>
      </footer>
    </div>
  );
};

export default App;
