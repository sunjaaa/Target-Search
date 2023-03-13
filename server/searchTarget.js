const puppeteer = require("puppeteer");

exports.searchTarget = async (target, list) => {
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

  let infos = {};

  let cardTables = {};

  if (name === target) {
    const rows = await webPage.$$eval(
      `#mw-content-text > div.mw-parser-output > table.infobox.vcard > tbody > tr`,
      (elements) => elements.length
    );
    for (let num = 3; num < rows; num++) {
      try {
        const data = await webPage.$eval(
          `#mw-content-text > div.mw-parser-output > table.infobox.vcard > tbody > tr:nth-child(${num})`,
          (element) => element.textContent
        );
        cardTables[`cardInfo${num - 2}`] = data;
      } catch (e) {
        cardTables[`cardInfo${num - 2}`] = "";
      }
    }

    try {
      const name = await webPage.$eval(
        ".firstHeading",
        (element) => element.textContent
      );
      infos.name = name;
    } catch (e) {
      infos.name = "";
    }

    try {
      const img = await webPage.$eval(
        "#mw-content-text > div.mw-parser-output > table.infobox.vcard > tbody > tr:nth-child(2) > td > a > img",
        (element) => element.src
      );
      infos.img = img;
    } catch (e) {
      infos.img = "";
    }

    list.push(cardTables);
    list.push(infos);
    console.log("********PUSHED********");
  } else {
    console.log("WRONG TARGET NAME");
  }
};
