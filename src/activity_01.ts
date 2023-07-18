// Activity 1
// * Open https://training-support.net
// * Print the title of the page
// * Click the about us button
// * Print the title of the new page

import { Builder, By, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Find the about us button and click it
    await driver.findElement(By.linkText("About Us")).click();

    // Print the title of the new page
    console.log(`The title of the new page is: ${await driver.getTitle()}`);
  } finally {
    await driver.quit();
  }
})();
