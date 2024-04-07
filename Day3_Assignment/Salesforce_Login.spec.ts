import { chromium, test } from "@playwright/test"


test("Test to login: Approach 3", async () => {
    const browser = await chromium.launch({ channel: "chrome" });

    const browserContext = await browser.newContext();

    const page = await browserContext.newPage();

    await page.goto("https://login.salesforce.com");



    const userName = page.locator("#username");
    userName.fill("vive@testleaf.com");

    const password = page.locator("#password");
    password.fill("test@123");

    const submit = page.locator("#Login");
    submit.click();

    await page.waitForTimeout(10000);

    const title = await page.title();
    console.log(`title ${title}`);

    const url = page.url();
    console.log(`url ${url}`);

    await page.close();

    await browserContext.close();

    await browser.close();

})