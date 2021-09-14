require('chromedriver');

function getChromeDriver()
{
    const webdriver = require('selenium-webdriver');
    return new webdriver.Builder().forBrowser('chrome').build();
}
module.exports = getChromeDriver;