const {test} = require('@playwright/test')

test("To test the Authentication header",async({page})=>{
    const username = 'admin';
    const password = 'admin';

    page.setExtraHTTPHeaders({Authorization: createAuthHeader(username,password)});
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await page.waitForTimeout(6000);
})

function createAuthHeader(username,password){
    return 'Basic '+ btoa(username+':'+password);
}