var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until; 

username = "admin@cedrus.digital";
password = "password";

// wait until page loaded

// wrap code into mocha

// create test suite and set of units tests ( package.json ) ( jenkins )

var driver = new webdriver.Builder()
    .forBrowser('safari')
    .build();

var element = driver.findElement(By.id('email'));

driver.get('http://localhost:4200');
var user = driver.wait(until.elementLocated(By.id('email')), 2000);
user.sendKeys(username);

var pw = driver.wait(until.elementLocated(By.id('password')), 2000);
pw.sendKeys(password);

driver.findElement(By.id('submitbtn')).click();

