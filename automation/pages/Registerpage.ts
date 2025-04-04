import { Page, expect } from "@playwright/test";
import { randomUUID } from "crypto";
export class RegisterPage {
  private page: Page;
  private firstName;
  private lastName;
  private email;
  private telephone;
  private password;
  private confirmPassword;
  private agreeCheckbox;
  private continueButton;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByRole('textbox', { name: 'First Name*' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name*' });
    this.email = page.getByRole('textbox', { name: 'E-Mail*' });
    this.telephone = page.getByRole('textbox', { name: 'Telephone*' });
    this.password = page.getByRole('textbox', { name: 'Password*' });
    this.confirmPassword = page.getByRole('textbox', { name: 'Password Confirm*' });
    this.agreeCheckbox = page.getByText('I have read and agree to the');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async fillRegistrationForm(user: { firstName: string; lastName: string; telephone: string; password: string; }): Promise<void> {
    const uniqueEmail = `testuser_${randomUUID().slice(0, 8)}@gmail.com`;
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(uniqueEmail);
    await this.telephone.fill(user.telephone);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);
    await this.agreeCheckbox.click();
    await this.continueButton.click();
  }
}