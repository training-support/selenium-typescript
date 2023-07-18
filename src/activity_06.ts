// Activity 6
// * Open https://training-support.net/selenium/DragDrop
// * Print the title of the page
// * Drag the ball into dropzone 1 and verify that it got activated
// * Drag the ball into dropzone 2 and verify that it got activated

import { Builder, By, WebDriver, until } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/DragDrop");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Get references to all the elements
    const ball = await driver.findElement(By.id("ball"));
    const dropzone1 = await driver.findElement(By.id("dropzone1"));
    const dropzone2 = await driver.findElement(By.id("dropzone2"));

    // Drag the ball into dropzone1
    await actions.dragAndDrop(ball, dropzone1).perform();

    // Verify if Dropzone1 was activated
    let dropzone_text = await dropzone1.findElement(By.css("span"));
    await driver.wait(until.elementTextContains(dropzone_text, "Dropped!"));
    if ((await dropzone_text.getText()) === "Dropped!") {
      console.log("Dropzone1 was activated!!");
    }

    // Drag the ball into dropzone2
    await actions.dragAndDrop(ball, dropzone2).perform();

    // Verify if Dropzone2 was activated
    dropzone_text = await dropzone2.findElement(By.css("span"));
    await driver.wait(until.elementTextContains(dropzone_text, "Dropped!"));
    if ((await dropzone_text.getText()) === "Dropped!") {
      console.log("Dropzone2 was activated!!");
    }
  } finally {
    await driver.quit();
  }
})();
