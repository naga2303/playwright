const {test} = require('@playwright/test')

test("Different context",async({browser})=>{

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const email_Locator =  page1.locator('#input-email');
    const pwd_Locator = page1.locator('#input-password');
    const loginButton = page1.locator("[value='Login']");

    await email_Locator.fill('pwtest@opencart.com');
    await pwd_Locator.fill('playwright@123');
    await loginButton.click();


    //Context 2
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const email_Locator2 =  page1.locator('#input-email');
    const pwd_Locator2 = page1.locator('#input-password');
    const loginButton2 = page1.locator("[value='Login']");

    await email_Locator2.fill("userpw@pw.com");
    await pwd_Locator2.fill("Test@123");
    await loginButton2.click();

    await new Promise(()=>{});

})