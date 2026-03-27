import { Page, Locator } from '@playwright/test';

export class TechStackComponent {
  readonly grid: Locator;
  readonly languagesCard: Locator;
  readonly frameworksCard: Locator;
  readonly apiTestingCard: Locator;
  readonly cicdCard: Locator;

  private constructor(private page: Page) {
    this.grid = page.getByTestId('tech-stack-grid');
    this.languagesCard = page.getByTestId('languages-card');
    this.frameworksCard = page.getByTestId('frameworks-card');
    this.apiTestingCard = page.getByTestId('api-testing-card');
    this.cicdCard = page.getByTestId('cicd-card');
  }

  static build(page: Page): TechStackComponent {
    return new TechStackComponent(page);
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
