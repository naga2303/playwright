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

test.beforeAll(async({page})=>{
    await page.goto('https://datatables.net/extensions/select/examples/initialisation/checkbox.html')
    console.log('who is first?')
})