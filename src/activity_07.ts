// Activity 7
// * Open https://training-support.net/selenium/Sliders
// * Print the title of the page
// * Drag the slider to the 75% position
// * Drag the slider to the 0% position
// * Drag the slider to the 100% position
// * Drag the slider to the 50% position

import { Builder, By, Origin, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Sliders");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Get the slider element
    const slider = await driver.findElement(By.id("volume"));

    // Drag slider to 75%
    await actions
      .move({ origin: slider })
      .press()
      .move({ x: 60, y: 0, origin: Origin.POINTER })
      .release()
      .perform();

    // Drag slider to 0%
    await actions.clear();
    await actions
      .move({ origin: slider })
      .press()
      .move({ x: -130, y: 0, origin: Origin.POINTER })
      .release()
      .perform();

    // Drag slider to 100%
    await actions.clear();
    await actions
      .move({ origin: slider })
      .press()
      .move({ x: 130, y: 0, origin: Origin.POINTER })
      .release()
      .perform();

    // Drag slider to 50%
    await actions.clear();
    await actions
      .move({ origin: slider })
      .press()
      .move({ x: 0, y: 0, origin: Origin.POINTER })
      .release()
      .perform();
  } finally {
    await driver.quit();
  }
})();
