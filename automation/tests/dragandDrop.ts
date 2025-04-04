import {test,expect} from '@playwright/test'
test('drag and drop',(async ({page})=>
{
await page.goto('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo')
const source=page.locator("//p[contains(text(),'Drag me to my target')]")
const target=page.locator("//p[contains(text(),'Drop here')]")
await target.scrollIntoViewIfNeeded()
await source.dragTo(target)
await page.waitForTimeout(3000)
await expect(await page.locator("//div[@id='droppable']/p")).toHaveText('Dropped!')

}))