const sum = require('./sum');
const getChromeDriver = require('./drivers');
const BasePage = require('./basePage');

test('case 1', () => {
    expect(sum(1, 2)).toBe(3);
});

test('case 2', () => {
    expect(case1());
});

async function case1() {
    let driver = getChromeDriver();
    await driver.manage().window().maximize();
    await driver.get('https://www.selenium.dev/documentation/webdriver/browser_manipulation/');
    let page = new BasePage(driver);
    await page.navButton.click();
    // await driver.quit();
    // return 3;
}