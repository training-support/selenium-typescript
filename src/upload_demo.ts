import { Builder, By } from "selenium-webdriver";

(async function () {
  const driver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to the page
    await driver.get("https://training-support.net/selenium/FileUpload");

    // Give the page a second to load
    await driver.sleep(1000);

    // Print the title of the page
    console.log(`The title of the page is: ${await driver.getTitle()}`);

    const filePath = "/home/abhiram/start-headless.sh";

    await driver.findElement(By.id("file")).sendKeys(filePath);

    await driver.findElement(By.css("button.m-auto")).click();
  } finally {
    // await driver.quit();
  }
})();
