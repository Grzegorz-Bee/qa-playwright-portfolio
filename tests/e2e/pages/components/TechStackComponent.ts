import { Page, Locator, expect } from '@playwright/test';

export class TechStackComponent {
  private constructor(
    readonly grid: Locator,
    readonly languagesCard: Locator,
    readonly frameworksCard: Locator,
    readonly apiTestingCard: Locator,
    readonly cicdCard: Locator,
  ) {}

  static async build(page: Page): Promise<TechStackComponent> {
    const grid = page.getByTestId('tech-stack-grid');
    const languagesCard = page.getByTestId('languages-card');
    const frameworksCard = page.getByTestId('frameworks-card');
    const apiTestingCard = page.getByTestId('api-testing-card');
    const cicdCard = page.getByTestId('cicd-card');
    await expect(grid).toBeVisible();
    await expect(languagesCard).toBeVisible();
    await expect(frameworksCard).toBeVisible();
    await expect(apiTestingCard).toBeVisible();
    await expect(cicdCard).toBeVisible();
    return new TechStackComponent(grid, languagesCard, frameworksCard, apiTestingCard, cicdCard);
  }

  async checkVisibility() {
    await this.grid.waitFor({ state: 'visible' });
    await this.languagesCard.waitFor({ state: 'visible' });
    await this.frameworksCard.waitFor({ state: 'visible' });
    await this.apiTestingCard.waitFor({ state: 'visible' });
    await this.cicdCard.waitFor({ state: 'visible' });
  }

  async getSkillTags(card: Locator): Promise<string[]> {
    return await card.locator('.tag').allInnerTexts();
  }
}
