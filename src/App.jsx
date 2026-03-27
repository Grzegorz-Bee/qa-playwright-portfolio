import React from 'react';
import { Globe, Briefcase, Mail, ExternalLink, Code, Terminal, Database, Cloud } from 'lucide-react';
import Contact from './components/Contact';
import './styles/App.css';

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
              <span className="tag">Cypress</span>
              <span className="tag"><i className="devicon-selenium-original colored"></i> Selenium</span>
              <span className="tag">JUnit</span>
              <span className="tag">Gatling</span>
              <span className="tag">Android (Kotlin)</span>
              <span className="tag">iOS (Swift)</span>
            </div>
          </div>
          <div className="card" data-testid="api-testing-card">
            <div className="card-title"><Database size={20} /> API Testing</div>
            <div className="skill-tags">
              <span className="tag">Postman</span>
              <span className="tag">RestAssured</span>
              <span className="tag">Axios</span>
              <span className="tag">K6</span>
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
          <p className="card-desc">
            A production-ready test automation framework using Playwright, TypeScript, and Page Object Model (POM). 
            Includes automatic reporting, retry logic, and multi-browser support.
          </p>
          <a href="https://github.com/Grzegorz-Bee/qa-playwright-portfolio" className="project-link" data-testid="framework-link">
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
