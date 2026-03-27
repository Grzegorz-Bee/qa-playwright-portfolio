## 🌐 Portfolio Website

You can view my technology stack and skills in action at:
**[https://grzeh.github.io/qa-playwright-portfolio/](https://grzeh.github.io/qa-playwright-portfolio/)**

---

# QA Automation Portfolio - Playwright & TypeScript

Welcome to my professional QA Automation portfolio! This project demonstrates high-quality end-to-end (E2E) and API testing using **Playwright** with **TypeScript**.

## 🚀 Key Features

- **Page Object Model (POM)**: Scalable and maintainable test architecture.
- **Dynamic Content & API**: Features a dynamic Contact Form with Vercel Serverless Functions.
- **Cross-browser Testing**: Configuration for Chromium, Firefox, and WebKit.
- **E2E Tests**: Robust UI tests including navigation, interaction, and API mocking.
- **Vercel Integration**: Ready for deployment with Vercel-specific configurations and serverless routes.
- **TypeScript**: Type-safe tests and frontend interactions.

## 📁 Project Structure

```text
├── api/                  # Vercel Serverless Functions (Python)
│   └── index.py         # Form submission handler (Flask)
├── requirements.txt      # Python dependencies
├── pages/                # Page Object Model classes
│   ├── BasePage.ts       # Shared base page with common utilities
│   └── GoogleSearch.ts   # Example page object for UI tests
├── tests/                # Test suites
│   ├── e2e/              # UI/End-to-End tests
│   └── api/              # API validation tests
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This document
```

## 🛠️ Prerequisites

To run this project, you need:
- **Node.js** (v18 or higher)
- **NPM** (installed with Node.js)
- **Python** (v3.9 or higher, for local API development)
- **Vercel CLI** (optional, for local serverless function testing)

## 💻 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd qa-playwright-portfolio
   ```

2. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

3. **Install Python dependencies (for local API testing)**:
   ```bash
   # Create a virtual environment
   python -m venv .venv
   
   # Activate the virtual environment (Windows)
   .venv\Scripts\activate
   
   # Activate the virtual environment (macOS/Linux)
   source .venv/bin/activate
   
   # Install Flask and dependencies
   pip install -r requirements.txt
   ```

5. **Install Playwright Browsers**:
   ```bash
   npx playwright install
   ```

6. **Run the tests**:
   ```bash
   # Run all tests
   npm test

   # Run tests in UI mode
   npm run test:ui
   ```

## 📊 View Report

After running the tests, an HTML report is generated. To open it:
```bash
npm run report
```

## 🚀 GitHub Pages Setup

To host your own version of this portfolio:
1. Go to your repository settings on GitHub.
2. Select **Pages** from the sidebar.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Once you push your changes to the `main` branch, the deployment will start automatically!

---

## 🚀 Vercel Deployment

This project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the project and deploy it.
3. The serverless function in `/api/index.py` will handle form submissions using Python/Flask.
4. UI will interact with the API seamlessly using the rewrites in `vercel.json`.

---

## ✨ Skills Demonstrated

- **Architecture**: Implementing the Page Object Model to minimize code duplication.
- **Asynchronous Programming**: Handling `async/await` patterns for reliable UI interactions.
- **Error Handling**: Using Playwright traces and screenshots to debug flaky tests.
- **Configuration**: Customizing test execution environments and browser options.
- **Testing Logic**: Writing meaningful assertions and handling dynamic page content.

---
*Created as part of my QA Automation journey to showcase skills in modern testing frameworks.*
