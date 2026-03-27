import { Page, Locator, expect } from '@playwright/test';

export class HeaderComponent {
  private constructor(
    readonly name: Locator,
    readonly title: Locator,
  ) {}

  static async build(page: Page): Promise<HeaderComponent> {
    const name = page.getByTestId('portfolio-name');
    const title = page.getByTestId('portfolio-title');
    await expect(name).toBeVisible();
    await expect(title).toBeVisible();
    return new HeaderComponent(name, title);
  }
}
