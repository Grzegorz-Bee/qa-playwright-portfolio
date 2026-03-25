import { Page } from '@playwright/test';
import { HeaderComponent } from './components/HeaderComponent';
import { SocialLinksComponent } from './components/SocialLinksComponent';
import { AboutComponent } from './components/AboutComponent';
import { TechStackComponent } from './components/TechStackComponent';
import { FeaturedFrameworkComponent } from './components/FeaturedFrameworkComponent';

export class PortfolioPage {
  readonly header: HeaderComponent;
  readonly socialLinks: SocialLinksComponent;
  readonly about: AboutComponent;
  readonly techStack: TechStackComponent;
  readonly featuredFramework: FeaturedFrameworkComponent;

  private constructor(private page: Page) {
    this.header = HeaderComponent.build(page);
    this.socialLinks = SocialLinksComponent.build(page);
    this.about = AboutComponent.build(page);
    this.techStack = TechStackComponent.build(page);
    this.featuredFramework = FeaturedFrameworkComponent.build(page);
  }

  static build(page: Page): PortfolioPage {
    return new PortfolioPage(page);
  }

  async navigate() {
    await this.page.goto('/');
  }
}
