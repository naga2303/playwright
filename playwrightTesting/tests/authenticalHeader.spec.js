const { test, expect } = require('@playwright/test');

test.describe("Flipkart", () => {
    let page;
    let context;
    test.beforeAll("", async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
    })
    test("Navigate", async () => {
        await page.goto("https://www.flipkart.com/");
        // await page.maximize()
        await page.locator("//div[@aria-label='Electronics']").hover();
        await page.locator("//a[text()='Gaming']").hover();
        await page.locator("//a[text()='Games']").click()
        const ele = await page.locator("(//select[@class='Gn+jFg'])[2]")
        await page.waitForTimeout(5000);
        await ele.selectOption({ value: '500' })
        // await page.waitForTimeout(5000);
        await page.waitForSelector("//a[@class='DMMoT0']/div/div[@class='Nx9bqj']");
        const listOfPrices = await page.locator("//a[@class='DMMoT0']/div/div[@class='Nx9bqj']").all()
        await page.locator("(//div[@class='_4WELSP'])[1]").click()
        await page.waitForEvent('popup');
        const totalPages = await context.pages()
        let page1 = totalPages[1];
        await page1.bringToFront();
        await page1.locator("(//div[@class='Pz+aTd'])[1]").click()
        let priceValue = await page.locator("(//div[@class='hl05eU'])[1]/div[1]")
        let firstProductPrice = await listOfPrices[0].innerText();
        console.log(firstProductPrice)
        await page1.screenshot({ path: 'firstProduct.png', fullPage: true })
        await expect(priceValue).toHaveText(firstProductPrice);
        await page.waitForTimeout(5000);

    })
})

//{fname:'',lname:'',date:'24-06-2024'}