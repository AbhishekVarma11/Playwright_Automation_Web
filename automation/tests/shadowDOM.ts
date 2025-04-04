import {test,expect} from '@playwright/test'

test('handling shadowDOM',async ({page})=>
{
await page.goto('https://www.lambdatest.com/selenium-playground/shadow-dom')
const NameTextBox=await page.locator("div#shadow_host>>div:nth-child(2)>input[placeholder='Name']")
await NameTextBox.fill('Abhishek')
const EmailTextBox=await page.locator("div#shadow_host>>div:nth-child(3)>input[placeholder='Email']")
await EmailTextBox.fill('test@gmail.com')

})
