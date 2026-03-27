import { test, expect } from '@playwright/test';
import { PortfolioPage } from '../pages/PortfolioPage';

test.describe('Contact Form Functionality', () => {
  let portfolioPage: PortfolioPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    portfolioPage = await PortfolioPage.build(page);
  });

  test('should display contact section and form elements', async () => {
    await portfolioPage.contact.checkVisibility();
    await expect(portfolioPage.contact.nameInput).toBeVisible();
    await expect(portfolioPage.contact.emailInput).toBeVisible();
    await expect(portfolioPage.contact.messageInput).toBeVisible();
    await expect(portfolioPage.contact.submitBtn).toBeVisible();
  });

  test('should successfully submit the form and show success message', async ({ page }) => {
    const contactData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, this is a test message!'
    };

    // Intercept API call
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Success! Your message has been received.' }),
      });
    });

    await portfolioPage.contact.fillForm(contactData);
    await portfolioPage.contact.submit();

    await expect(portfolioPage.contact.statusMessage).toBeVisible();
    await expect(portfolioPage.contact.statusMessage).toHaveText('Success! Your message has been received.');
    await expect(portfolioPage.contact.statusMessage).toHaveClass(/success/);

    // Form should be reset
    await expect(portfolioPage.contact.nameInput).toHaveValue('');
  });

  test('should show error message on API failure', async ({ page }) => {
    // Intercept API call with error
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 400,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Invalid email address' }),
      });
    });

    await portfolioPage.contact.fillForm({
      name: 'Tester',
      email: 'test@example.com',
      message: 'Short'
    });
    await portfolioPage.contact.submit();

    await expect(portfolioPage.contact.statusMessage).toBeVisible();
    await expect(portfolioPage.contact.statusMessage).toHaveText('Invalid email address');
    await expect(portfolioPage.contact.statusMessage).toHaveClass(/error/);
  });

  test('should show network error message', async ({ page }) => {
    // Intercept API call with network failure
    await page.route('**/api/contact', async (route) => {
      await route.abort('failed');
    });

    await portfolioPage.contact.fillForm({
      name: 'Tester',
      email: 'test@example.com',
      message: 'Test message'
    });
    await portfolioPage.contact.submit();

    await expect(portfolioPage.contact.statusMessage).toBeVisible();
    await expect(portfolioPage.contact.statusMessage).toHaveText(/Network error/);
    await expect(portfolioPage.contact.statusMessage).toHaveClass(/error/);
  });
});
