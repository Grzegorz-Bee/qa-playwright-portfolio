import { Page, Locator } from '@playwright/test';

export class FeaturedFrameworkComponent {
  readonly section: Locator;
  readonly card: Locator;
  readonly description: Locator;
  readonly link: Locator;

  private constructor(private page: Page) {
    this.section = page.getByTestId('featured-framework-section');
    this.card = page.getByTestId('featured-framework-card');
    this.description = page.getByTestId('featured-framework-desc');
    this.link = page.getByTestId('featured-framework-link');
  }

  static build(page: Page): FeaturedFrameworkComponent {
    return new FeaturedFrameworkComponent(page);
  }

  async checkVisibility() {
    await this.section.waitFor({ state: 'visible' });
    await this.card.waitFor({ state: 'visible' });
    await this.description.waitFor({ state: 'visible' });
    await this.link.waitFor({ state: 'visible' });
  }
}
