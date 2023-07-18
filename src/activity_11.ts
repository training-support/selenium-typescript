// Activity 11
// * Open https://training-support.net/selenium/Tables
// * Print the title of the page
// * Print all the odd numbered rows

import { Builder, By, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Tables");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Get all the rows
    const rows = await driver.findElements(By.xpath("//table/tbody/tr"));

    // Print out all the odd numbered rows
    for (const [i, row] of rows.entries()) {
      if (i % 2 === 0) {
        console.log(await row.getText());
      }
    }
  } finally {
    await driver.quit();
  }
})();
