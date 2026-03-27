import { Page, Locator, expect } from '@playwright/test';

export class FeaturedFrameworkComponent {
  private constructor(
    readonly section: Locator,
    readonly card: Locator,
    readonly description: Locator,
    readonly link: Locator,
  ) {}

  static async build(page: Page): Promise<FeaturedFrameworkComponent> {
    const section = page.getByTestId('featured-framework-section');
    const card = page.getByTestId('featured-framework-card');
    const description = page.getByTestId('featured-framework-desc');
    const link = page.getByTestId('featured-framework-link');
    await expect(section).toBeVisible();
    await expect(card).toBeVisible();
    await expect(description).toBeVisible();
    await expect(link).toBeVisible();
    return new FeaturedFrameworkComponent(section, card, description, link);
  }

  async checkVisibility() {
    await this.section.waitFor({ state: 'visible' });
    await this.card.waitFor({ state: 'visible' });
    await this.description.waitFor({ state: 'visible' });
    await this.link.waitFor({ state: 'visible' });
  }
}
