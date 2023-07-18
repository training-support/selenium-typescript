// Activity 4
// * Open https://training-support.net/selenium/MouseEvents
// * Print the title of the page
// * Click the Cargo.toml file and print the message that appears
// * Right click on the src folder, click on the rename button, and print the message.
// * Right click on the src folder, click on the open button, and print the message.
// * Double click the target folder and print the message that appears.

import { Builder, By, WebDriver, until } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/MouseEvents");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Click the Cargo.toml file and print the message that appears
    const cargo_toml = await driver.findElement(
      By.css("div.file:nth-child(2)")
    );
    await actions.clear();
    await actions.click(cargo_toml).perform();
    let result_text = await driver.findElement(By.id("result")).getText();
    console.log(`On clicking the Cargo.toml: ${result_text}`);

    // Right click on the src folder, click on the rename button, and print the message.
    await driver.sleep(1000);
    const src = await driver.findElement(By.css("div.file:nth-child(3)"));
    await actions.clear();
    await actions.contextClick(src).perform();
    await driver.wait(until.elementLocated(By.css("li.w-full:nth-child(4)")));
    await driver.findElement(By.css("li.w-full:nth-child(4)")).click();
    result_text = await driver.findElement(By.id("result")).getText();
    console.log(`On trying to rename the src folder: ${result_text}`);

    // Right click on the src folder, click on the open button, and print the message.
    await driver.sleep(1000);
    await actions.clear();
    await actions.contextClick(src).perform();
    await driver.wait(until.elementLocated(By.css("li.w-full:nth-child(1)")));
    await driver.findElement(By.css("li.w-full:nth-child(1)")).click();
    result_text = await driver.findElement(By.id("result")).getText();
    console.log(`On trying to open the src: ${result_text}`);

    // Double click the target folder and print the message that appears.
    await driver.sleep(1000);
    const target = await driver.findElement(By.css("div.file:nth-child(4)"));
    await actions.clear();
    await actions.doubleClick(target).perform();
    result_text = await driver.findElement(By.id("result")).getText();
    console.log(`On double clicking the target folder: ${result_text}`);
  } finally {
    await driver.quit();
  }
})();
