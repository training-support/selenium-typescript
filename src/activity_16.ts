// Activity 16
// * Open https://training-support.net/selenium/Alerts
// * Print the title of the page
// * Click the Confirm button
// * Handle the alert by clicking the ok button and print the message
// * Click the Confirm button again
// * Handle the alert by clicking the cancel button and print the message

import { Builder, By, WebDriver, until } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Alerts");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Trigger the confirm alert
    const trigger_confirm_alert = async () => {
      await driver.findElement(By.id("confirmation")).click();
      await driver.wait(until.alertIsPresent());
    };
    await trigger_confirm_alert();

    // Switch to the alert and click ok
    let alert = await driver.switchTo().alert();
    await alert.accept();

    // Print the result text
    await driver.wait(until.elementLocated(By.id("result")));
    let result = await driver.findElement(By.id("result")).getText();
    console.log(`On clicking ok: ${result}`);

    // Trigger the confirm alert again
    await trigger_confirm_alert();

    // Switch to the alert and click cancel
    alert = await driver.switchTo().alert();
    await alert.dismiss();

    // Print the result text
    result = await driver.findElement(By.id("result")).getText();
    console.log(`On clicking ok: ${result}`);
  } finally {
    await driver.quit();
  }
})();
