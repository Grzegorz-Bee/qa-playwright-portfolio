import { Locator, Page, expect } from '@playwright/test';

export class ContactComponent {
  private constructor(
    readonly section: Locator,
    readonly nameInput: Locator,
    readonly emailInput: Locator,
    readonly messageInput: Locator,
    readonly submitBtn: Locator,
    readonly statusMessage: Locator,
  ) {}

  static async build(page: Page): Promise<ContactComponent> {
    const section = page.getByTestId('contact-section');
    const nameInput = page.getByTestId('contact-name');
    const emailInput = page.getByTestId('contact-email');
    const messageInput = page.getByTestId('contact-message');
    const submitBtn = page.getByTestId('contact-submit');
    const statusMessage = page.getByTestId('contact-status-message');
    await expect(section).toBeVisible();
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(messageInput).toBeVisible();
    await expect(submitBtn).toBeVisible();
    return new ContactComponent(section, nameInput, emailInput, messageInput, submitBtn, statusMessage);
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
