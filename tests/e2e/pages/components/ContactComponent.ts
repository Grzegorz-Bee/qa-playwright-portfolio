import { Locator, Page, expect } from '@playwright/test';

export class ContactComponent {
  readonly section: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly submitBtn: Locator;
  readonly statusMessage: Locator;

  private constructor(private page: Page) {
    this.section = page.getByTestId('contact-section');
    this.nameInput = page.getByTestId('contact-name');
    this.emailInput = page.getByTestId('contact-email');
    this.messageInput = page.getByTestId('contact-message');
    this.submitBtn = page.getByTestId('contact-submit');
    this.statusMessage = page.getByTestId('contact-status-message');
  }

  static build(page: Page): ContactComponent {
    return new ContactComponent(page);
  }

  async checkVisibility() {
    await expect(this.section).toBeVisible();
  }

  async fillForm(details: { name: string; email: string; message: string }) {
    await this.nameInput.fill(details.name);
    await this.emailInput.fill(details.email);
    await this.messageInput.fill(details.message);
  }

  async submit() {
    await this.submitBtn.click();
  }
}
