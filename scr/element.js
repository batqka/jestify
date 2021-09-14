// const {By} = require("selenium-webdriver");

class Element {

    constructor(driver, by) {
        this.driver = driver;
        this.by = by;
    }

    click(){
        this.driver.findElement(this.by).click();
    }
}

module.exports = Element;