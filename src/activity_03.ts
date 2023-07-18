// Activity 3
// * Open https://training-support.net/selenium/TargetPractice
// * Print the title of the page
// * Using xpath:
//    * Locate the Cyan button and print it's text
//    * Locate the 6th heading and print it's classes
// * Using any other locator:
//    * Locate the 5th heading and print it's color
//    * Locate the pink button and print it's dimensions

import { Builder, By, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/TargetPractice");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Locate the Cyan button and print it's text
    const cyan_button = await driver.findElement(
      By.xpath("//button[text()='Cyan']")
    );
    console.log(
      `The text in the cyan button is: ${await cyan_button.getText()}`
    );

    // Locate the 6th heading and print it's classes
    const sixth_header = await driver.findElement(
      By.xpath("//h1[contains(@class, 'text-fuchsia-600')]")
    );
    console.log(
      `The classes of the 6th heading are: ${await sixth_header.getAttribute(
        "class"
      )}`
    );

    // Locate the 5th heading and print it's color
    const fifth_header = await driver.findElement(By.css("h5.text-purple-600"));
    console.log(
      `The color of the 5th heading is: ${await fifth_header.getCssValue(
        "color"
      )}`
    );

    // Locate the pink button and print it's dimensions
    const pink_button = await driver.findElement(By.css("button.bg-pink-200"));
    const pink_button_x = await pink_button.getCssValue("width");
    const pink_button_y = await pink_button.getCssValue("height");
    console.log(
      `The dimensions of the pink button are: (${pink_button_x})x(${pink_button_y})`
    );
  } finally {
    await driver.quit();
  }
})();
