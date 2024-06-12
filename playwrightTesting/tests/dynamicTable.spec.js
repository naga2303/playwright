//@ts-check
const {test,expect} = require('@playwright/test')

test.describe("Dynamic table handling",()=>{
    
    test("To retrieve the least height",async({page})=>{
            
                await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
                await page.waitForTimeout(5000)
                const rows = await page.locator('//table[@class="tsc_table_s13"]/tbody/tr');
               //console.log(await rows.count())
               let textValues = await rows.allTextContents();
               //console.log(textValues);
               let totalRows = await rows.count();
               for(let i=0;i<totalRows;i++){
                const cellValue = await page.locator("(//table[@class='tsc_table_s13']/tbody/tr/td[3]/span)")
                const value = await cellValue.allInnerTexts()
                console.log(value);
               }
    })
})