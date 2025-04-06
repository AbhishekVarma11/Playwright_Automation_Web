import {test,expect} from '@playwright/test'
test('webatables automation',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table= page.locator("id=productTable")
    const cols=page.locator("table#productTable>thead>tr>th")
    console.log(await cols.count())
    const rows = page.locator("table#productTable>tbody>tr")

    console.log(await rows.count())
    

    //we are select the Tablet

    const MatchedRow=rows.filter({
        has:page.locator('td'),
        hasText:'Tablet'
    })
    
    await MatchedRow.scrollIntoViewIfNeeded()
await MatchedRow.locator('input').check()
await page.waitForTimeout(5000)
})
test('reading data from web tables ',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const table= page.locator("id=productTable")
    //const cols=page.locator("table#productTable>thead>tr>th")
    const rows = page.locator("table#productTable>tbody>tr")
    const pages=page.locator("//ul[@class='pagination']/li")
    for(let k=0;k< await pages.count();k++)
    {
    for(let i=0;i<await rows.count();i++)
    {
        const row =rows.nth(i)
        const cols=row.locator('td')
        for(let j=0;j<await cols.count()-1;j++)
        {
            console.log(await cols.nth(j).textContent())
        }
    }
    if(k>0)
    {
    await pages.nth(k).locator('a').click()
}
    
}

 
})