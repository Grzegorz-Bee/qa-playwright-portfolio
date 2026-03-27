import { Page, Locator } from '@playwright/test';

export class AboutComponent {
  readonly section: Locator;
  readonly text: Locator;

  private constructor(private page: Page) {
    this.section = page.getByTestId('about-section');
    this.text = page.getByTestId('about-text');
  }

  static build(page: Page): AboutComponent {
    return new AboutComponent(page);
  }

  async checkVisibility() {
    await this.section.waitFor({ state: 'visible' });
    await this.text.waitFor({ state: 'visible' });
  }
}
