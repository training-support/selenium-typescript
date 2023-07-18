// Activity 10
// * Open https://training-support.net/selenium/Tables
// * Print the title of the page
// * Print the dimensions of the table
// * Print the cells of the 5th row
// * Print the value at the 6th row 2nd column

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

    // Print the dimensions of the table
    const cols = await driver.findElements(By.xpath("//table/thead/tr[1]/td"));
    const rows = await driver.findElements(By.xpath("//table/tbody/tr"));
    console.log(
      `The dimensions of the table are: ${rows.length}x${cols.length}`
    );

    // Print the cells of the 5th row
    const fifth_row = await driver.findElements(
      By.xpath("//table/tbody/tr[5]/td")
    );
    console.log("Data in the 5th row is: ");
    for (const cell of fifth_row) {
      console.log(await cell.getText());
    }

    // Print the value at the 6th row 2nd column
    const cell6_2 = await driver
      .findElement(By.xpath("//table/tbody/tr[6]/td[2]"))
      .getText();
    console.log(`The value at (6,2) is: ${cell6_2}`);
  } finally {
    await driver.quit();
  }
})();
