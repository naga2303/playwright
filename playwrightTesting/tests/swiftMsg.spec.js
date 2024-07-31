const {test} = require('@playwright/test')

test("To test the swift messages",async({page})=>{

    await page.goto("https://www.iso20022.org/");

    const catalogueOfMessage = page.locator("//a[@aria-label='Catalogue of messages']");
    const paymentPage = page.locator("//a[@aria-label='Payments']");

    await page.locator('//button[text()="Accept All Cookies"]').click()
    await catalogueOfMessage.hover();
    await paymentPage.click();
    
    await page.locator('#edit-search').fill('pacs.008');
    
    await page.locator('#catalogue-search').click();
    
    await page.waitForTimeout(6000);
    const downloadFiles = page.waitForEvent('download');
    await page.locator('//span[text()="Download Complete Message Set"]').click()
    
    const download = await downloadFiles;
    await download.saveAs("customPath",+ download.suggestedFilename());

})