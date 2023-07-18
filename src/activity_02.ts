// Activity 2
// * Open https://training-support.net/selenium/SimpleForm
// * Print the title of the page
// * Fill up the form
// * Submit the form
// * Print the confirmation message

import { Builder, By, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/SimpleForm");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Fill out the form
    await driver.findElement(By.id("full-name")).sendKeys("Abhiram K");
    await driver.findElement(By.id("email")).sendKeys("abhiram@cklabs.com");
    await driver
      .findElement(By.css("input[name='event-date']"))
      .sendKeys("2023-12-25");
    await driver
      .findElement(By.id("additional-details"))
      .sendKeys("This is a party!!");

    // Submit the form
    await driver.findElement(By.css("button.font-bold")).click();

    // Print the confirmation message
    const result_text = await driver
      .findElement(By.id("action-confirmation"))
      .getText();
    console.log(`The confirmation message is: ${result_text}`);
  } finally {
    await driver.quit();
  }
})();
