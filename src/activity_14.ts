// Activity 14
// * Open https://training-support.net/selenium/Selects
// * Print the title of the page
// * On the Single Select:
//    * Select the second option using the visible text
//    * Select the third option using the index
//    * Select the fourth option using the value
//    * Get all the options and print them to the console

import { Builder, By, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Selects");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Store a partial of the xpath
    const select_root = "//select[contains(@class, 'h-10')]";

    // Select the second option using visible text
    await driver
      .findElement(By.xpath(`${select_root}/option[text()='Two']`))
      .click();

    // Select the third option using the index
    const options = await driver.findElements(
      By.xpath(`${select_root}/option`)
    );
    await options[3].click();

    // Select the fourth option using value
    await driver
      .findElement(By.xpath(`${select_root}/option[@value='four']`))
      .click();

    // Print all the options
    console.log("The single select has the following options:");
    for (const option of options) {
      console.log(await option.getText());
    }
  } finally {
    await driver.quit();
  }
})();
