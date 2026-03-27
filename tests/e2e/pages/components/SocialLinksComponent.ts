import { Page, Locator } from '@playwright/test';

export class SocialLinksComponent {
  readonly github: Locator;
  readonly linkedin: Locator;

  private constructor(private page: Page) {
    this.github = page.getByTestId('github-link');
    this.linkedin = page.getByTestId('linkedin-link');
  }

  static build(page: Page): SocialLinksComponent {
    return new SocialLinksComponent(page);
  }

  async checkVisibility() {
    await this.github.waitFor({ state: 'visible' });
    await this.linkedin.waitFor({ state: 'visible' });
  }
}
