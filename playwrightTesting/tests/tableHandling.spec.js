/*
Test-cases using table
Get the total number of rows from a table.
Get the total number of columns for all rows.
Get all data from a row from table.
Get the last data row from the table.
Increase the count of rows and get all names
Search data from table and get some data from that filtered table.
Sort the table and then get the data.
Get multiple selected data from the table
*/
const { test, expect } = require('@playwright/test');

/*test('To Count the rows',async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
   // console.log('who is first?')
    const parentLocator = await page.locator('table#example tbody')
    console.log(await parentLocator.locator('tr').count())
}) */

/*test('To Count the number of columns',async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
   // console.log('who is first?')
    const parentLocator = await page.locator('table#example tbody tr >> nth=0')
    console.log(await parentLocator.locator('td').count())
})
*/

/*test('Get all data from a row from table.(second row)',async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
    const pageRows = await page.locator('table#example tbody')
   /* const secondRow = await pageRows.locator('tr').nth(1).locator(':scope').allInnerTexts()
    await secondRow.forEach((test)=>{
         console.log(test)
    })
    //To print the text from all the rows.
    const pgCount = await pageRows.locator('tr').count()
    for (let i =0;i<pgCount;i++)
    {
        const rowsTest = await pageRows.locator('tr td').nth(i).locator(':scope').allInnerTexts()
       await  rowsTest.forEach((test1)=>{
            console.log(test1)
        })
    }
    
})*/

test('Get last row of  the table',async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
    //First search for the people with office as Tokyo – you can directly search this from the search bar.

    const search_Tokyo = await page.locator('input[type=search]')
    await search_Tokyo.fill('Tokyo')
    const pageRows = await page.locator('table#example tbody')
    await page.waitForTimeout(5000)
    const last = await pageRows.locator('tr').last().locator(':scope',{hasText:'Tokyo'}).locator('td.select-checkbox').click()
    await page.waitForTimeout(5000)
})