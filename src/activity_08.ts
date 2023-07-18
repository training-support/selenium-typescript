// Activity 8
// * Open https://training-support.net/selenium/DynamicControls
// * Print the title of the page
// * Click the toggle checkbox button, wait for the checkbox to disappear
// * Click the toggle checkbox button again, check it once it reappears

import { Builder, By, WebDriver, until } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/DynamicControls");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Get a reference to the checkbox
    const checkbox = await driver.findElement(By.id("checkbox"));

    // Get a reference to the toggle button
    const checkbox_toggle_button = await driver.findElement(
      By.xpath("//button[text()='Toggle Checkbox']")
    );

    // Click the button
    await checkbox_toggle_button.click();

    // Wait for the checkbox to disappear
    await driver.wait(until.elementIsNotVisible(checkbox));

    // Click the button again
    await checkbox_toggle_button.click();

    // Wait for the checkbox to reapppear
    await driver.wait(until.elementIsVisible(checkbox));

    // Toggle the checkbox
    await checkbox.click();
  } finally {
    await driver.quit();
  }
})();
