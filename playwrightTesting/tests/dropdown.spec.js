import {playwright,test} from '@playwright/test'

test("Dropdown cases", async({page})=>{
    await page.goto("https://www.leafground.com/");
    await page.locator("//li/descendant::span[text()='Element']/preceding-sibling::i").hover();
    await page.locator("//li/descendant::span[text()='Element']/preceding-sibling::i").click();
    await page.locator("//li/descendant::span[text()='Dropdown']").click();
   // await page.locator("//select[@class='ui-selectonemenu']").click();
    await page.locator("//label[text()='Select Country']").click()
    await page.locator("//li[text()='Brazil']").click();
    
    const result = await page.evaluate(() => {
        const dropdownValue = document.evaluate(
            '//li[text()="Brazil"]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        const allOptions = Array.from(dropdownValue.parentNode.children);
        const selectedIndex = allOptions.indexOf(dropdownValue);
        return {
            selectedIndex: selectedIndex,
            allOptions: allOptions.map(option => option.textContent.trim()) // Returning option texts for simplicity
        };
    });
    
    const { selectedIndex, allOptions } = result;
    
    console.log(`Selected index: ${selectedIndex}`);
    console.log('All options:', allOptions.length);
    // Loop through the options starting from the selected index
    

    await page.pause();

})