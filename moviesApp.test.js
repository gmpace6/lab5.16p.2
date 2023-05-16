const { Builder, Browser, By, Key, until, NoSuchElementError } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("test delete function", async () => {
  await driver.get("http://localhost:3000/")
  // Find text field and add text
  await driver.findElement(By.name("movieTitle")).sendKeys("Star Wars", Key.RETURN);
  // Find and click remove button
  let deleteBtn = await driver.wait(until.elementLocated(By.className("delete-btn")))
  expect(await deleteBtn.getText()).toBe("Remove")
  await driver.findElement(By.className("delete-btn")).click();
  // See if movie was removed
let elementRemoved = false
  try {
  await driver.findElemnt(ByclassName('delete-btn'))
} catch (NoSuchElementError) {
  elementRemoved = true
}
expect(elementRemoved).toBe(true)
});

test("test cross off movie function", async () => {
  await driver.get("http://localhost:3000")

  await driver.findElement(By.id("add-movie-input")).sendKeys("spider-man", Key.RETURN)
  await driver.findElement(By.id("movies-list")).click()
})

// test("can search Google twice", async () => {
//   // Fix the TODOs below to finish the test
//   // TODO Navigate to google.com
//   await driver.get("https://www.google.com/")
//   // TODO Search for something in Google and wait for the page to load
//   await driver.findElement(By.name("q")).sendKeys("pokemon", Key.RETURN);
//   await driver.wait(until.titleIs("pokemon - Google Search"), 1000);
//   // TODO Call .clear() on the search bar element to clear the old search term
//   await driver.findElement(By.name("q")).clear();
//   // TODO Call .sendKeys() on the search bar element to search for a new term
//   await driver.findElement(By.name("q")).sendKeys("stormlight", Key.RETURN);
//   // TODO Wait for the results page to load
//   await driver.wait(until.titleIs("stormlight - Google Search"), 1000);
// });
