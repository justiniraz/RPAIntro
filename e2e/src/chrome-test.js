var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until; 

// wait until page loaded

// wrap code into mocha

// create test suite and set of units tests ( package.json ) ( jenkins )

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:4200');
driver.findElement(By.name('email')).sendKeys('admin@cedrus.digital');
driver.findElement(By.name('password')).sendKeys('password');
driver.findElement(By.name('submitbtn')).click();

