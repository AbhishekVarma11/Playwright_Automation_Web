import {test,expect} from '@playwright/test'

test('handling frames',async ({page})=>
{
await page.goto("https://www.lambdatest.com/selenium-playground/nested-frames/")
console.log(page.frames().length)
 const topFrame=await page.frameLocator("//*[@name='frame-top']")
const frameText=await topFrame.locator('//body/p').textContent()
console.log(frameText)
await expect(topFrame.locator('//body/p')).toHaveText('Top')

})
test('handling nested frames ',async ({page})=>
    {
    await page.goto("https://www.lambdatest.com/selenium-playground/nested-frames/")
     const bottomFrame=await page.frameLocator("//*[@name='frame-bottom']")
     const middleFrame=await  bottomFrame.frameLocator("//*[@name='frame-middle']")
    const frameText=await middleFrame.locator('//body/p').textContent()
    console.log(frameText)
    await expect(middleFrame.locator('//body/p')).toHaveText('Middle')
    
    })
