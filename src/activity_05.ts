// Activity 5
// * Open https://training-support.net/selenium/KeyboardEvents
// * Print the title of the page
// * Use actions to type "helpusobi1" and perform a control + enter action.
// * Print the message that appears.

import { Builder, By, Key, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/KeyboardEvents");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Type "helpusobi1"
    await actions.sendKeys("helpusobi1").perform();

    // Perform a Control + Enter action
    await actions.clear();
    await actions
      .keyDown(Key.CONTROL)
      .sendKeys(Key.ENTER)
      .keyUp(Key.CONTROL)
      .perform();

    // Print the secret text
    const result_text = await driver.findElement(By.id("result")).getText();
    console.log(`The secret text is: ${result_text}`);
  } finally {
    await driver.quit();
  }
})();
