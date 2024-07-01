// @ts-check
const {test,expect} = require('@playwright/test');

test.describe("Tata cliq automation",()=>{
    let page;
    let context;
    
    test.beforeAll("To navigate the browser",async({browser})=>{
         context = await browser.newContext();
        page = await context.newPage();
        
    })
    test("Navigate the browser",async()=>{
        await page.goto("https://www.tatacliq.com/");
        await page.locator("#wzrk-cancel").click();
        //await page.locator("(//div[@class='DesktopHeader__categoryAndBrand'])[2]").hover();
        await page.hover("(//div[@class='DesktopHeader__categoryAndBrand'])[2]");
        await page.getByText("Watches & Accessories").click();
        await page.locator("(//div[@class='DesktopHeader__brandsDetails'])[1]").click()
        
        await page.waitForSelector("//div[@class='ProductDescription__priceHolder']/h3", { timeout: 5000 })
        const lstLen = await page.locator("//div[@class='ProductDescription__priceHolder']/h3").all()
        console.log("lstLEN: "+lstLen.length);
        const totalPrices = await page.$$("//div[@class='ProductDescription__priceHolder']/h3")
       console.log(totalPrices.length)
       let ar = new Array();
        for(const ele of totalPrices){
           // console.log(await ele.textContent());
            ar.push(await ele.textContent())
        }
      const cleanPrice = ar.map(prices=>{
        return parseInt(prices.replace(/₹/g, ""),10);
      })
      cleanPrice.sort((a,b)=> a - b);
       console.log(cleanPrice);


       await page.waitForTimeout(3000);

       //const windowPromise = context.waitForEvent('page');
      
        await page.locator("(//div[@class='ProductModule__base'])[1]").click();
        //await page.waitForEvent('popup');
        const totalPages = await context.pages();
        console.log(totalPages.length);
        let page1 = totalPages[1];
        await page1.bringToFront();
        await page1.locator("//span[text()='BUY NOW']").click()
        await page.close();
        await page1.waitForTimeout(5000);
      

        //const window = await windowPromise;
       
    
       
      
    })
})