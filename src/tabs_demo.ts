import { Builder, By, until } from "selenium-webdriver";

(async function () {
  const driver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/Tabs");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Capture the original tab's handle
    const original_handle = await driver.getWindowHandle();
    console.log(`Original tab's handle is: ${original_handle}`);

    // Get all the open tabs
    console.log(
      `Before clicking the button, the available tabs are: ${await driver.getAllWindowHandles()}`
    );

    console.log("- Clicking the button -");
    await driver.findElement(By.css("button.bg-purple-200")).click();

    // Wait for the number of tabs to be 2
    await driver.wait(
      async () => (await driver.getAllWindowHandles()).length === 2,
      10000
    );
    const handles = await driver.getAllWindowHandles();
    console.log(
      `After clicking the button, the available tabs are: ${handles}`
    );

    console.log("- switching to the new tab -");

    await driver.switchTo().window(handles[1]);

    console.log(
      `The current tab's handle is: ${await driver.getWindowHandle()}`
    );

    // Wait for some content to load on the new page
    await driver.wait(until.elementLocated(By.css(".mt-5")));

    // Print the code value from the new tab
    await driver.sleep(1000);
    const text = await driver.findElement(By.css(".mt-5")).getText();
    console.log(`The text on the new tab is: ${text}`);
  } finally {
    await driver.quit();
  }
})();
