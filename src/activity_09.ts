// Activity 9
// * Open https://training-support.net/selenium/DynamicContent
// * Print the title of the page
// * Click the button
// * Wait for the word "collapse" to appear and then print it

import { Builder, By, WebDriver, until } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/DynamicContent");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Click the button
    await driver.findElement(By.id("genButton")).click();

    // Wait for the word "collapse" to appear
    const word_area = await driver.findElement(By.id("word"));
    await driver.wait(until.elementTextContains(word_area, "collapse"));
    console.log("collapse detected.");
  } finally {
    await driver.quit();
  }
})();
