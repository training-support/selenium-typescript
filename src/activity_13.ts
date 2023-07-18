// Activity 13
// * Open https://training-support.net/selenium/DynamicAttributes
// * Print the title of the page
// * Fill out the form and submit it
// * Verify that the form was submitted
// * Refresh the page
// * Fill out the form again using the SAME LOCATORS as before
// * Verify that the form submits again

import { Builder, By, WebDriver } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/DynamicAttributes");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Fill out the form
    const fill_form_and_submit = async () => {
      await driver
        .findElement(By.css("input[id^='full-name']"))
        .sendKeys("Abhiram K");
      await driver
        .findElement(By.css("input[id$='email']"))
        .sendKeys("abhiram@cklabs.com");
      await driver
        .findElement(By.xpath("//input[contains(@name, 'event-date')]"))
        .sendKeys("2023-12-25");
      await driver
        .findElement(By.css("textarea[id*='additional-details']"))
        .sendKeys("This is a party!!");
      await driver.findElement(By.css("button.font-bold")).click();
    };
    await fill_form_and_submit();

    // Refresh the page
    await driver.navigate().refresh();

    // Give the page a second to load
    await driver.sleep(1000);

    // Fill out the form again
    await fill_form_and_submit();
  } finally {
    await driver.quit();
  }
})();
