const {test} = require('@playwright/test');

test.describe("Flipkart",()=>{
    let page;
    let context;
    test.beforeAll("",async({browser})=>{
        context = await browser.newContext();
        page = await context.newPage();
    })
    test("Navigate",async()=>{
        await page.goto("https://www.flipkart.com/");
       // await page.maximize()
        await page.locator("//div[@aria-label='Electronics']").hover();
        await page.locator("//a[text()='Gaming']").hover();
        await page.locator("//a[text()='Games']").click()
        const ele = await page.locator("(//select[@class='Gn+jFg'])[2]")
        await ele.selectOption({value : '500'})
        await  page.waitForSelector("//a[@class='DMMoT0']/div/div[@class='Nx9bqj']");
        const listOfPrices = await page.locator("//a[@class='DMMoT0']/div/div[@class='Nx9bqj']").all()
        console.log(await listOfPrices.length);

        await page.locator("(//div[@class='_4WELSP'])[1]").click()
        
        //let page1 = await context.newPage()
        console.log(await context.pages().length)
        
        const page1 = await context.newPage()
        await page.waitForTimeout(5000);

    })
})

//{fname:'',lname:'',date:'24-06-2024'}