const sum = require('./sum');
const getChromeDriver = require('./drivers');

test('case 1', () => {
    expect(sum(1, 2)).toBe(3);
});

test('case 2', () => {
    expect(case1()).toBe(3);
});

function case1() {
    let driver = getChromeDriver();
    driver.get('google.com');
    driver.quit();
    return 3;
}