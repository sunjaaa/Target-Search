const puppeteer = require("puppeteer");

exports.searchTarget = async (target) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1920, height: 1080 },
  });

  const webPage = await browser.newPage();

  await webPage.goto(`https://ko.wikipedia.org/wiki/${target}`);

  await webPage.waitForSelector(`.firstHeading`, { timeout: 3000 });

  const name = await webPage.$eval(
    ".firstHeading",
    (element) => element.textContent
  );

  const img = await webPage.$eval(
    "#mw-content-text > div.mw-parser-output > table.infobox.vcard > tbody > tr:nth-child(2) > td > a > img",
    (element) => element.src
  );

  const card_infos = [];

  if (name === target) {
    const rows = await webPage.$$eval(
      `#mw-content-text > div.mw-parser-output > table.infobox.vcard > tbody > tr`,
      (elements) => elements.length
    );

    for (let num = 3; num <= rows; num++) {
      try {
        const content = await webPage.$eval(
          `#mw-content-text > div.mw-parser-output > table.infobox.vcard > tbody > tr:nth-child(${num})`,
          (element) => element.textContent
        );

        card_infos.push({
          content,
          _id: num - 2,
        });
      } catch (e) {
        console.error(e);
      }
    }
  } else {
    console.log("WRONG TARGET NAME");
  }

  await browser.close();

  return { name, img, card_infos };
};
