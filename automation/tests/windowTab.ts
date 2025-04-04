import { expect, test } from "@playwright/test";
test('handling alerts',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
console.log(page.url())
    const [newWindow] =await Promise.all([
        page.waitForEvent("popup"),
        page.locator("a:has-text('Follow On Twitter')").click()

    ])
    console.log(newWindow.url())
})
