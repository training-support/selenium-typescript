// Activity 12
// * Open https://training-support.net/selenium/Tables
// * Print the title of the page
// * Create a new row and enter the following values into it:
//   | 10 | The Lightning Thief | Rick Riordan | 0786838655 | $8.01 |
// * Click the header that says ASIN to sort the table
// * Print the cell at the 4th row 2nd column

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

    // Add a new row
    await driver.findElement(By.css("button.rounded-lg")).click();

    // Get the cells of the new row
    const last_row_cells = await driver.findElements(
      By.xpath("//table/tbody/tr[last()]/td")
    );

    // Represent the data to be added as an array
    const row_data = [
      "10",
      "The Lightning Thief",
      "Rick Riordan",
      "0786838655",
      "$8.01",
    ];

    // Insert the data into the new row cells
    for (const [i, cell] of last_row_cells.entries()) {
      await cell.clear();
      await cell.sendKeys(row_data[i]);
    }

    // Click on the ASIN header to sort the table
    await driver.findElement(By.xpath("//th[text()='ASIN']")).click();

    // Get the value at the 4th row, 2nd column
    const cell4_2 = await driver
      .findElement(By.xpath("//table/tbody/tr[4]/td[2]"))
      .getText();
    console.log(`The value at (4,2) is: ${cell4_2}`);
  } finally {
    await driver.quit();
  }
})();
