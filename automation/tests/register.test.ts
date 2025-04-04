import {test } from "../Fixtures/BaseFixture"
import * as user from "../testData/user.json"; 

test("User Registration and Logout", async ({ homePage, registerPage }) => {

  await homePage.navigate();
  await homePage.hoverOnMyAccount();
  await homePage.goToRegister();

  await registerPage.fillRegistrationForm(user);

  await homePage.logout();
});