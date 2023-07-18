// Activity 17
// * Open https://training-support.net/selenium/Alerts
// * Print the title of the page
// * Click the Prompt button
// * Type your name into the prompt alert and click ok
// * Print the message that shows

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
    await driver.findElement(By.id("prompt")).click();
    await driver.wait(until.alertIsPresent());

    // Switch to the alert, type my name, and accept
    const alert = await driver.switchTo().alert();
    await alert.sendKeys("Abhiram");
    await alert.accept();

    // Print the result text
    const result = await driver.findElement(By.id("result")).getText();
    console.log(`On clicking ok: ${result}`);
  } finally {
    await driver.quit();
  }
})();
