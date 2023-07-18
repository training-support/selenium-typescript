// Activity 15
// * Open https://training-support.net/selenium/Selects
// * Print the title of the page
// * On the Multi Select:
//    * Select the “TailwindCSS” option using the visible text
//    * Select the 6th to 9th options using their index
//    * Select the “Rust” option using it’s value
//    * Deselect the 6th option using it’s index

import { Builder, By, Key, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Selects");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Store a partial of the xpath
    const select_root = "//select[contains(@class, 'h-80')]";

    // Select the TailwindCSS option using visible text
    await driver
      .findElement(By.xpath(`${select_root}/option[text()='TailwindCSS']`))
      .click();

    // Hold down the control key
    await actions.clear();
    await actions.keyDown(Key.CONTROL).perform();

    // Select the 6th to 9th options using their index
    const options = await driver.findElements(
      By.xpath(`${select_root}/option`)
    );
    await actions.clear();
    await actions.dragAndDrop(options[5], options[8]).perform();

    // Select the Rust option using it's value
    await driver
      .findElement(By.xpath(`${select_root}/option[@value='rust']`))
      .click();

    // Deselect the 6th option using index
    await options[5].click();

    // Raise the control key
    await actions.clear();
    await actions.keyUp(Key.CONTROL).perform();
  } finally {
    await driver.quit();
  }
})();
