const {expect, test} = require('@playwright/test')

test.describe("To test the Flipkart website",()=>{
    let page;
    let context;
    test.beforeAll(async({browser})=>{
        context =await browser.newContext();
        page = await context.newPage();
    })
    test("To navigate into the flipkar",async()=>{

        await page.goto("https://www.flipkart.com/");
        await page.locator("(//div[@class='YBLJE4'])[4]").hover()
        await page.locator("//a[text()='Gaming']").hover()
        await page.locator("//a[text()='Games']").click()
       // let selectMaxValues = await page.locator("(//select[@class='Gn+jFg'])[2]");
        //await page.selectOption('select#Gn+jFg',{value:500});
        await page.selectOption('')
        await page.waitForTimeout(5000)
    })
})