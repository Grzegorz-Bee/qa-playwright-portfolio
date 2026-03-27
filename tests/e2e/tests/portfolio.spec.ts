import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../pages/PortfolioPage';

test.describe('Portfolio Page Functionality', () => {
  let portfolioPage: PortfolioPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    portfolioPage = await PortfolioPage.build(page);
  });

  test('should display correct header information and social links', async () => {
    await expect(portfolioPage.header.name).toHaveText('QA Automation Portfolio');
    await expect(portfolioPage.header.title).toContainText('Software Quality Engineer');
    
    await portfolioPage.socialLinks.checkVisibility();
    await expect(portfolioPage.socialLinks.github).toBeVisible();
    await expect(portfolioPage.socialLinks.linkedin).toBeVisible();
  });

  test('should display about section with description', async () => {
    await portfolioPage.about.checkVisibility();
    await expect(portfolioPage.about.text).toContainText('Highly skilled QA Automation Engineer');
  });

  test('should display tech stack with all categories', async () => {
    await portfolioPage.techStack.checkVisibility();
    
    const languages = await portfolioPage.techStack.getSkillTags(portfolioPage.techStack.languagesCard);
    const expectedLanguages = ['TypeScript', 'JavaScript', 'Java', 'Python', 'Kotlin', 'Swift', 'Groovy'];
    for (const lang of expectedLanguages) {
      expect(languages.some(l => l.includes(lang))).toBeTruthy();
    }

    const frameworks = await portfolioPage.techStack.getSkillTags(portfolioPage.techStack.frameworksCard);
    const expectedFrameworks = ['Playwright', 'Cypress', 'Selenium', 'JUnit', 'Gatling', 'Android (Kotlin)', 'iOS (Swift)'];
    for (const fw of expectedFrameworks) {
      expect(frameworks.some(f => f.includes(fw))).toBeTruthy();
    }

    const apiTools = await portfolioPage.techStack.getSkillTags(portfolioPage.techStack.apiTestingCard);
    expect(apiTools.some(t => t.includes('Postman'))).toBeTruthy();
    expect(apiTools.some(t => t.includes('Axios'))).toBeTruthy();

    const cicdTools = await portfolioPage.techStack.getSkillTags(portfolioPage.techStack.cicdCard);
    expect(cicdTools.some(t => t.includes('GitHub Actions'))).toBeTruthy();
    expect(cicdTools.some(t => t.includes('Docker'))).toBeTruthy();
  });

  test('should display featured framework section', async () => {
    await portfolioPage.featuredFramework.checkVisibility();
    await expect(portfolioPage.featuredFramework.card).toContainText('Playwright POM Architecture');
    await expect(portfolioPage.featuredFramework.link).toHaveAttribute('href', /github.com/);
  });
});
