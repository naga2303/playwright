const {test} = require('@playwright/test')

test("To verify the checkbox",async({page})=>{

    await page.goto('https://classic.freecrm.com/register/')
})