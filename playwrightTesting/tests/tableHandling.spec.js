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

/*test('Get last row of  the table',async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
    //First search for the people with office as Tokyo – you can directly search this from the search bar.

    const search_Tokyo = await page.locator('input[type=search]')
    await search_Tokyo.fill('Tokyo')
    const pageRows = await page.locator('table#example tbody')
    await page.waitForTimeout(5000)
    const last = await pageRows.locator('tr').last().locator(':scope',{hasText:'Tokyo'}).locator('td.select-checkbox').click()
    await page.waitForTimeout(5000)
}) */

/*test("Increase the row size and get al the names",async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
    await page.locator('#example_length>label>select').selectOption('25')
   await page.waitForTimeout(5000)
   const table = await page.locator('#example tbody tr').locator(':scope').locator('td.sorting_1').allInnerTexts()
   await table.forEach(names =>console.log(names))
   
    
}) */
// Get all the names who lives in the place tokyo
/*test("Search and get the names from the filtered info",async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
    await page.locator('#example_length>label>select').selectOption('25')
    await page.waitForTimeout(5000)
    await page.locator('#example_filter label input').fill('Tokyo')
    //await page.locator('example tbody tr').locator(':scope').locator('td >> nth=1').click()
    const names = await page.locator('table#example tbody tr').locator(':scope').locator('td').allInnerTexts()
    await names.forEach((nameT)=> {console.log(nameT)})
})
*/

/*test("Collect multiple selected rows from a table",async({page})=>{
    await page.goto('https://demo.guru99.com/test/web-table-element.php#')
    const rows = await page.locator('.dataTable tbody tr')
    const rowCount =await rows.count()
    let ar = new Array()
    for (let i =0;i<rowCount;i++)
    {
        let row = rows.nth(i)
        let companyName = await row.locator('td:nth-child(1)').allInnerTexts()
        let prevprice = await row.locator('td:nth-child(3)').allInnerTexts()
        let currprice = await row.locator('td:nth-child(3)').allInnerTexts()
        if(companyName && prevprice && currprice)
        {
           ar.push({
            companyName:companyName,
            prevprice:prevprice,
            currprice:currprice
           })
        }
    }
  await console.log(ar)
})*/

test("Data grid testing testleaf website- just expand the inner table",async({page})=>{
    await page.goto('https://www.leafground.com/grid.xhtml')
    const rows = await page.locator('tbody.ui-datatable-data.ui-widget-content > tr.ui-datatable-selectable').all()
    //const rowCount = await rows.count()
    for (let i of rows)
    {
        const currentRow = i.getByRole('gridcell').nth(2)
       // const currentName = await currentRow.innerText()
        await i.getByRole('gridcell').nth(1).click()
        await page.waitForTimeout(4000)
    }
})
