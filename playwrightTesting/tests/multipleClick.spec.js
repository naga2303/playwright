const {test} = require('@playwright/test')

test.describe("Login",()=>{
    let page;
    let context;
    test.beforeAll("",async({browser})=>{
        context = await browser.newContext();
        page = await context.newPage();
    })
    test("")
})