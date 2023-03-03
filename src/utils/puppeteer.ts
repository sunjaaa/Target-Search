const puppeteer = require("puppeteer");

export const runPuppeteer = async (text: string): Promise<any> => {
  const browser = await puppeteer.launch({ headless: true });
  const webPage = await browser.newPage();

  await webPage.goto("https://namu.wiki/");

  await webPage.type("#MtDmxfkNH > input[type=search]", text, { delay: 20 });

  await webPage.screenshot({ path: "test.png" });
};

export {};
