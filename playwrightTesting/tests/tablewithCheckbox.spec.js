//https://cosmocode.io/automation-practice-webtable/

const {test} = require('@playwright/test');
const { allure, default: AllureReporter ,AllureReporterOptions} = require('allure-playwright');



test.describe("To test the dynamic table with checkbox",()=>{
    
    let page;
    let context;
    test.beforeAll("",async({browser})=>{
        context = await browser.newContext();
        page = await context.newPage();
    })
    test("To click the checkbox which are english as Primary Language",async()=>{
        
        await page.goto("https://cosmocode.io/automation-practice-webtable/");
        await page.waitForTimeout(5000);
        let countries = await page.locator("//table[@id='countries']/tbody/tr").all();
        let countryLocator = await page.locator("//table[@id='countries']/tbody/tr")
        console.log(await countries.length)
        for(let i =2;i<=countries.length;i++){
            let rows = await page.locator("//table[@id='countries']/tbody/tr["+i+"]/td[5]")
            console.log(await rows.innerText())
            let textEnglish = await rows.innerText()
            if(textEnglish == "English")
            {
                await page.locator("//table[@id='countries']/tbody/tr["+i+"]/td[1]/input").check()
            }
        }
        await page.waitForTimeout(5000);
        
    })
})