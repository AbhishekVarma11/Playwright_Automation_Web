import {test,expect} from '@playwright/test'

test('windowsActions',async({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground/context-menu")
    await page.click("//div[@id='hot-spot']",{button:'right'})
    page.on('dialog',async(dialog)=>
    {
        console.log("alert message",dialog.message())
        await dialog.accept()
       
    })

})