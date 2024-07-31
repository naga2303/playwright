const {test} = require('@playwright/test');

test("To test the external Code set",async({page})=>{
    await page.goto("https://www.iso20022.org/");

    const catalogueOfMessage = page.locator("//a[@aria-label='Catalogue of messages']");
    const externalCodeSets = page.locator("//a[@aria-label='External Code Sets']");

    await page.locator('//button[text()="Accept All Cookies"]').click()
    await catalogueOfMessage.hover();
    await externalCodeSets.click();

    //const downloadFiles = page.waitForEvent('download');
 /* await page.locator("//a[@aria-label='External Code Sets - XLSX format']").click()
 // await page.locator("//a[@aria-label='External Code Sets - JSON format']").click()
    const download = await downloadFiles;
    await download.saveAs('C:\\Users\\nagarajan.r\\Downloads\\'+ download.suggestedFilename());
    await page.locator("//a[@aria-label='External Code Sets - XSD format']").click()
    const download1 = await downloadFiles;
    await download1.saveAs('C:\\Users\\nagarajan.r\\Downloads\\'+ download.suggestedFilename());*/

    const allZips = await page.locator("//a[contains(@href, '.zip')]").all()
    const allDoc = await page.locator("//a[contains(@href, '.doc')]").all()
    const allxlsx = await page.locator("//a[contains(@href, '.xlsx')]").all()

   

        for (const link of allZips) {
            // Click the link to initiate download
            const downloadFiles = page.waitForEvent('download');
            await link.click();
            const download = await downloadFiles;
            await download.saveAs('C:\\Users\\nagarajan.r\\Downloads\\'+ download.suggestedFilename());
                       
        }
})