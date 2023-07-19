import { Builder, By, until } from "selenium-webdriver";

(async function () {
  const driver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Alerts");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Trigger a simple alert
    await driver.findElement(By.id("simple")).click();

    // Wait for the alert to show up
    await driver.wait(until.alertIsPresent());

    // Get a reference to the alert
    const alert = await driver.switchTo().alert();

    // Print the text of the alert
    console.log(`The text in the alert is: ${await alert.getText()}`);

    // Accept the alert
    await alert.accept();

    // Print the result text
    const result = await driver.findElement(By.id("result")).getText();
    console.log(`After accepting the alert, the page says: ${result}`);
  } finally {
    await driver.quit();
  }
})();
