# QA Automation Portfolio - Playwright, TypeScript, React & Python API

## 🌐 Live Portfolio

Production site: **https://qa-playwright-portfolio.vercel.app/**

## 📌 Overview

This repository contains a QA-focused portfolio application together with automated coverage for both the frontend experience and the backend contact endpoint.

The stack combines:

- `React` + `Vite` for the portfolio UI
- `Playwright` + `TypeScript` for end-to-end coverage
- `pytest` for backend API validation
- `Python` + `Flask` for the contact form API served through a Vercel Function

## 🚀 What This Project Demonstrates

- Page Object Model structure for maintainable Playwright tests
- Cross-browser E2E coverage for Chromium, Firefox, and WebKit
- API validation for the contact form endpoint
- A hybrid frontend + Python backend setup deployed on Vercel
- GitHub Actions workflow for preview deployments and automated E2E checks

## 📁 Project Structure

```text
├── src/
│   ├── api/
│   │   └── index.py            # Flask contact API used by Vercel rewrites
│   ├── components/             # React UI components
│   ├── styles/                 # Frontend styles
│   ├── App.jsx                 # Main portfolio page
│   └── main.jsx                # React entry point
├── tests/
│   ├── api/
│   │   └── test_index.py       # pytest coverage for the Flask contact API
│   └── e2e/
│       ├── pages/              # Page Objects and reusable UI components
│       └── tests/              # Playwright specs
├── .github/workflows/
│   └── vercel-deployment.yml   # Preview deploy + Playwright validation workflow
├── playwright.config.ts        # Playwright projects and environment-aware base URL
├── vercel.json                 # Vercel build output and rewrite rules
├── vite.config.ts              # Vite configuration
├── requirements.txt            # Python dependencies
├── package.json                # NPM scripts and frontend dependencies
└── README.md                   # Project documentation
```

## 🛠️ Prerequisites

To work with the project locally, install:

- `Node.js` 20+
- `npm`
- `Python` 3.12 recommended (`3.9+` should work for local development)
- `pip`
- `Vercel CLI` (optional, useful when you want local parity with Vercel configuration)

## 💻 Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd qa-playwright-portfolio
   ```

2. Install Node.js dependencies:

   ```bash
   npm install
   ```

3. Create a virtual environment:

   ```bash
   python -m venv .venv
   ```

4. Activate the virtual environment.

   On Windows:

   ```bash
   .venv\Scripts\activate
   ```

   On macOS/Linux:

   ```bash
   source .venv/bin/activate
   ```

5. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

6. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

7. Start the frontend locally:

   ```bash
   npm run dev
   ```

### Optional: pull Vercel settings locally

If you want local parity with the hosted environment, use:

```bash
vercel pull
vercel env pull
```

Keep secrets in Vercel Environment Variables instead of committing them to the repository.

## ▶️ Available Scripts

```bash
npm run dev         # Start the Vite development server
npm run build       # Create a production build in dist/
npm run preview     # Preview the production build locally
npm test            # Run Playwright E2E tests
npm run test:ui     # Run Playwright in UI mode
npm run test:unit   # Run Vitest unit tests
npm run test:api    # Run pytest API tests
npm run report      # Open the Playwright HTML report
npm run report:allure      # Generate the Allure HTML report from allure-results/
npm run report:allure:open # Open the generated Allure HTML report
```

## ✅ Testing

### Run Playwright E2E tests

By default, Playwright targets the deployed Vercel portfolio URL defined in `playwright.config.ts`.

```bash
npm test
```

To run against a specific deployment, set `PLAYWRIGHT_BASE_URL` before launching the suite.

If Vercel Deployment Protection is enabled for previews, provide `VERCEL_BYPASS_TOKEN` so the tests can access the deployment.

### Run API tests

```bash
npm run test:api
```

The API tests validate `src/api/index.py` directly with `pytest`.

### Open the Playwright HTML report

```bash
npm run report
```

### Generate and open the Allure report

Playwright now also writes raw Allure data to `allure-results/` on every run.

Generate the static Allure HTML report:

```bash
npm run report:allure
```

Open the generated report locally:

```bash
npm run report:allure:open
```

In GitHub Actions, the scheduled E2E workflow uploads both `allure-results` and the generated `allure-report` as artifacts alongside the Playwright HTML report.

## 🚀 Deployment

## Vercel

The repository is configured for Vercel deployment:

- `npm run build` generates the frontend bundle in `dist/`
- `vercel.json` rewrites `/api/(.*)` requests to `src/api/index.py`
- The contact form backend runs as a stateless Vercel Function
- Preview environments can be deployed and validated automatically from GitHub pull requests

The GitHub Actions workflow in `.github/workflows/vercel-deployment.yml` does the following for pull requests:

1. Builds and deploys a Vercel preview
2. Runs the Playwright suite against the preview URL
3. Uploads the Playwright HTML report, Allure results, and the generated Allure report as workflow artifacts

Required repository secrets for that workflow include:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `VERCEL_BYPASS_TOKEN` when deployment protection is enabled

## GitHub Pages

The repository can also publish the static frontend with GitHub Pages when only the frontend output is needed.

## ✨ Skills Demonstrated

- Test architecture using the Page Object Model pattern
- Browser automation with Playwright and TypeScript
- Backend validation with `pytest`
- Frontend development with React and Vite
- Deployment-aware QA workflows for Vercel-hosted applications

---

Created as a QA automation portfolio project to demonstrate modern testing, API validation, and deployment practices.

## Contact form email delivery

- The contact form posts to `/api/contact`, which now sends email through `Resend`.
- Configure these environment variables locally and in Vercel:
  - `RESEND_API_KEY`
  - `CONTACT_RECIPIENT_EMAIL`
  - `CONTACT_SENDER_EMAIL` (optional, defaults to `Portfolio Contact <onboarding@resend.dev>`)
- For production on Vercel, add the values in project environment variables rather than committing secrets.