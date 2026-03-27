import {Page, Locator, expect} from '@playwright/test';

export class AboutComponent {
  private constructor(
      readonly section: Locator,
      readonly text: Locator
  ) {}

  static async build(page: Page): Promise<AboutComponent> {
    const section = page.getByTestId('about-section');
    const text = page.getByTestId('about-text');
    await expect(section).toBeVisible();
    await expect(text).toBeVisible();
    return new AboutComponent(section, text);
  }

  async checkVisibility() {
    await this.section.waitFor({ state: 'visible' });
    await this.text.waitFor({ state: 'visible' });
  }
}
