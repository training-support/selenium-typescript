import assert from "assert";
import { Builder, By, WebDriver } from "selenium-webdriver";

describe("Selenium Demo Test", function () {
  this.timeout(60000);

  let driver: WebDriver;

  before("Driver Setup", async function () {
    driver = await new Builder().forBrowser("firefox").build();
  });

  it("should open the training-support website", async function () {
    await driver.get("https://training-support.net");
    assert.equal(await driver.getTitle(), "Training Support");
  });

  it("should find a button that says 'About Us' on the page", async function () {
    const button = await driver.findElement(By.linkText("About Us"));
    assert.ok(button);
  });

  it("should take us to the About Us page when clicked", async function () {
    const button = await driver.findElement(By.linkText("About Us"));
    await button.click();
    assert.equal(await driver.getTitle(), "About Training Support");
  });

  after("Close the browser", async function () {
    await driver.quit();
  });
});
