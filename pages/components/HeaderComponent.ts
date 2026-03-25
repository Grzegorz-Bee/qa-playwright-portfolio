import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly name: Locator;
  readonly title: Locator;

  private constructor(private page: Page) {
    this.name = page.getByTestId('portfolio-name');
    this.title = page.getByTestId('portfolio-title');
  }

  static build(page: Page): HeaderComponent {
    return new HeaderComponent(page);
  }

  async checkVisibility() {
    await this.name.waitFor({ state: 'visible' });
    await this.title.waitFor({ state: 'visible' });
  }
}
