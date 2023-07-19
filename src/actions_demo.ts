import { Builder, By, Key } from "selenium-webdriver";

(async function () {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = driver.actions({ async: true });
  try {
    // Navigate to the page
    await driver.get("https://duckduckgo.com");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    // Find the searchbox
    const searchbox = await driver.findElement(By.id("searchbox_input"));

    // Type into the searchbox
    await actions
      .click(searchbox)
      .sendKeys("hello ")
      .keyDown(Key.SHIFT)
      .sendKeys("hello")
      .keyUp(Key.SHIFT)
      .perform();
  } finally {
    // await driver.quit();
  }
})();
