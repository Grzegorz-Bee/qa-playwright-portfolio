import { Page } from '@playwright/test';
import { HeaderComponent } from './components/HeaderComponent';
import { SocialLinksComponent } from './components/SocialLinksComponent';
import { AboutComponent } from './components/AboutComponent';
import { TechStackComponent } from './components/TechStackComponent';
import { FeaturedFrameworkComponent } from './components/FeaturedFrameworkComponent';
import { ContactComponent } from './components/ContactComponent';

export class PortfolioPage {
  readonly header: HeaderComponent;
  readonly socialLinks: SocialLinksComponent;
  readonly about: AboutComponent;
  readonly techStack: TechStackComponent;
  readonly featuredFramework: FeaturedFrameworkComponent;
  readonly contact: ContactComponent;

  private constructor(
    private page: Page,
    header: HeaderComponent,
    socialLinks: SocialLinksComponent,
    about: AboutComponent,
    techStack: TechStackComponent,
    featuredFramework: FeaturedFrameworkComponent,
    contact: ContactComponent,
  ) {
    this.header = header;
    this.socialLinks = socialLinks;
    this.about = about;
    this.techStack = techStack;
    this.featuredFramework = featuredFramework;
    this.contact = contact;
  }

  static async build(page: Page): Promise<PortfolioPage> {
    const header = await HeaderComponent.build(page);
    const socialLinks = await SocialLinksComponent.build(page);
    const about = await AboutComponent.build(page);
    const techStack = await TechStackComponent.build(page);
    const featuredFramework = await FeaturedFrameworkComponent.build(page);
    const contact = await ContactComponent.build(page);
    return new PortfolioPage(page, header, socialLinks, about, techStack, featuredFramework, contact);
  }

  async navigate() {
    await this.page.goto('/');
  }
}
