const Element = require('./element');
const {By} = require("selenium-webdriver");

class BasePage {
    constructor(driver) {
        this.driver = driver;
        this.navButton = new Element(this.driver, By.id('navbarDropdown') )
    }
}

module.exports = BasePage;
// this.driver.findElement(By.id('navbarDropdown'));