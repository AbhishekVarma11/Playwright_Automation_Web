import { Page, expect } from "@playwright/test";
export class HomePage {
    private page: Page;
    private myAccount;
    private registerLink;
    private logoutLink;
  
    constructor(page: Page) {
      this.page = page;
      this.myAccount = page.locator("(//div[@class='info']/span[contains(text(),'My account')])[2]");
      this.registerLink = page.getByRole('link', { name: 'Register' });
      this.logoutLink = page.getByRole('link', { name: 'Logout', exact: true });
    }
  
    async navigate(): Promise<void> {
      await this.page.goto('https://ecommerce-playground.lambdatest.io/');
    }
  
    async hoverOnMyAccount(): Promise<void> {
      await this.myAccount.hover();
    }
  
    async goToRegister(): Promise<void> {
      await this.registerLink.click();
    }
  
    async logout(): Promise<void> {
      await this.hoverOnMyAccount();
      await this.logoutLink.click();
    }
  }