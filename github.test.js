const { Builder, Capabilities, By } = require("selenium-webdriver");

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

test("Github", async () => {
  await driver.get("https://www.github.com/");

  let searchBarElement = await driver.findElement(
    By.css('[name= "data-hydro-click"]')
  );

  let searchBarElement = await driver.findElement(
    By.css('[name= "data-ga-click"]')
  );

  let searchBarElement = await driver.findElement(
    By.css('[name= "button.btn.btn"]')
  );

  let searchBarElement = await driver.findElement(
    By.css('[name= "user_profile_bio"]')
  );

  await editProfile.click();

  await bioBox.sendKeys("Software Engineering");

  await saveButton.click();

  await driver.sleep(5000);

  await driver.quit();
});

test("Github", async () => {
  await driver.get("https://www.github.com/");

  let searchBarElement = await driver.findElement(
    By.xpath("(//a/span class [feature-preview-indicator)])[i]")
  );

  let searchBarElement = await driver.findElement(
    By.xpath("(//a/role [menuitem)])[i]")
  );

  let searchBarElement = await driver.findElement(
    By.xpath("(//a/span class [feature-preview-indicator)])[i]")
  );

  await editProfile.click();

  await bioBox.sendKeys("Software Engineering");

  await saveButton.click();

  await driver.sleep(5000);

  await driver.quit();
});
