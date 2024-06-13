//@ts-check
const {test,expect} = require('@playwright/test')
const { error } = require('console')
const { text } = require('stream/consumers')

test.describe("Dynamic table handling",()=>{
    
    test("To retrieve the least height",async({page})=>{
            try{
                await page.goto("https://www.techlistic.com/2017/02/automate-demo-web-table-with-selenium.html")
                await page.waitForTimeout(5000)
                const rows = await page.locator('//table[@class="tsc_table_s13"]/tbody/tr');
               //console.log(await rows.count())
               let textValues = await rows.allTextContents();
               //console.log(textValues);
               let totalRows = await rows.count();
               let textSort = new Array();
               for(let i=1;i<=totalRows;i++){
                const cellValue = await page.locator(`(//table[@class='tsc_table_s13']/tbody/tr/td[3]/span)[${i}]`);
                const value = await cellValue.textContent()
                textSort.push(value);
               }
               const extractNumber = (str)=>{
                const match = str.match(/\d+/);
                return match ? parseInt(match[0]) : null;
               }
               const numbers = textSort.map(extractNumber);
               console.log(numbers);
               
               //console.log(textSort);
              //const rowText = await rows.locator(`:scope >> td[3]\\span`).textContent()
              //console.log(rowText);
            }
            catch(e){
                console.error(`${error}`)
            }
    })
})