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

  let pageData = {};

  if (name === target) {
    // await webPage.waitForSelector(`.infobox > tbody > tr:nth-child(2) > td`, {
    //   timeout: 3000,
    // });
    // await webPage.waitForSelector(`.infobox > tbody > tr:nth-child(5) > td`, {
    //   timeout: 3000,
    // });
    // await webPage.waitForSelector(`.infobox > tbody > tr:nth-child(8) > td`, {
    //   timeout: 3000,
    // });

    try {
      const name = await webPage.$eval(
        ".firstHeading",
        (element) => element.textContent
      );
      pageData.name = name;
    } catch (e) {
      pageData.name = "";
    }

    try {
      const birthDate = await webPage.$eval(
        ".infobox > tbody > tr:nth-child(2) > td",
        (element) => element.textContent
      );
      pageData.birthDate = birthDate;
    } catch (e) {
      pageData.birthDate = "";
    }

    try {
      const occupation = await webPage.$eval(
        ".infobox > tbody > tr:nth-child(5) > td",
        (element) => element.textContent
      );
      pageData.occupation = occupation;
    } catch (e) {
      pageData.occupation = "";
    }

    try {
      const agency = await webPage.$eval(
        ".infobox > tbody > tr:nth-child(8) > td",
        (element) => element.textContent
      );
      pageData.agency = agency;
    } catch (e) {
      pageData.agency = "";
    }

    try {
      const content = await webPage.$eval(
        "#mw-content-text > div.mw-parser-output",
        (element) => element.textContent
      );
      pageData.content = content;
    } catch (e) {
      pageData.content = "";
    }

    try {
      const img = await webPage.$eval(
        "#mw-content-text > div.mw-parser-output > table.infobox.infobox.vcard > tbody > tr:nth-child(2) > td > a > img",
        (element) => element.src
      );
      pageData.img = img;
    } catch (e) {
      pageData.img = "";
    }

    try {
      const table = await webPage.$eval(
        "#mw-content-text > div.mw-parser-output > table.infobox.infobox.vcard",
        (element) => element.textContent
      );
      pageData.table = table;
    } catch (e) {
      pageData.table = "";
    }

    list.push(pageData);
    console.log("********PUSHED********");
  } else {
    console.log("WRONG TARGET NAME");
  }
};
