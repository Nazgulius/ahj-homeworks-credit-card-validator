import puppeteer from "puppeteer";

describe("Page start", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      heanless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("page start", async () => {
    await page.goto("http://localhost:8080/");

    await page.waitFor("body");
  });

  // afterAll(async () => {
  //   await browser.close();
  // });
});
