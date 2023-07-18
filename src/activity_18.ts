// Activity 18
// * Open https://training-support.net/selenium/Tabs
// * Print the title of the page
// * Click the button to open a new tab
// * Do this until you open a tab with the code “incentive” on it
// * Print the number of tabs you had to open until you reached this tab

import { Builder, By, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Tabs");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Store the original tab's handle
    const original_handle = await driver.getWindowHandle();

    // Create a variable to store tab count
    let count = 0;

    // ESLint has a weird rule about using while(true)
    // but for some reason for(;;) is okay for infinite looping.
    for (;;) {
      // Switch to the original tab
      await driver.switchTo().window(original_handle);

      // Open a new tab
      await driver
        .findElement(By.xpath("//button[contains(@class, 'bg-purple-200')]"))
        .click();

      // Wait for the second tab to open
      await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
        5000
      );

      // Switch to the new tab
      const handles = await driver.getAllWindowHandles();
      await driver.switchTo().window(handles[1]);

      // Wait for the code to load
      await driver.sleep(500);
      const code = await driver.findElement(By.xpath("//h2/span")).getText();

      if (code === "incentive") {
        console.log("incentive detected.");
        console.log(`It took ${count} tabs to get here.`);
        break;
      } else {
        console.log("incentive not found, retrying");
        count++;
        await driver.close();
      }
    }
  } finally {
    await driver.quit();
  }
})();
