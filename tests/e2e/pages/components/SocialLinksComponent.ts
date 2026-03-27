import { Page, Locator, expect } from '@playwright/test';

export class SocialLinksComponent {
  private constructor(
    readonly github: Locator,
    readonly linkedin: Locator,
  ) {}

  static async build(page: Page): Promise<SocialLinksComponent> {
    const github = page.getByTestId('github-link');
    const linkedin = page.getByTestId('linkedin-link');
    await expect(github).toBeVisible();
    await expect(linkedin).toBeVisible();
    return new SocialLinksComponent(github, linkedin);
  }

  async checkVisibility() {
    await this.github.waitFor({ state: 'visible' });
    await this.linkedin.waitFor({ state: 'visible' });
  }
}
