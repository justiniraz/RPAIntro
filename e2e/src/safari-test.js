var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('safari')
    .build();

driver.get('http:/localhost:4200');
driver.findElement(By.name('email')).sendKeys('admin@cedrus.digital');
driver.findElement(By.name('password')).sendKeys('password');
driver.findElement(By.name('submitbtn')).click();


