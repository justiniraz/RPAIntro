var webdriver = require("selenium-webdriver"),
    By = webdriver.By,
    until = webdriver.until; 

username = 'admin@cedrus.digital';
password = 'password';
firstName = 'Justin';

// wait until page loaded

// wrap code into mocha

// create test suite and set of units tests ( package.json ) ( jenkins )

var driver = new webdriver.Builder()
    .forBrowser('safari')
    .build();


driver.get('http://localhost:4200');

var fName = driver.wait(until.elementLocated(By.id('firstName')), 2000);
fName.sendKeys(firstName);

var user = driver.wait(until.elementLocated(By.id('email')), 2000);
user.sendKeys(username);

var pw = driver.wait(until.elementLocated(By.id('password')), 2000);
pw.sendKeys(password);

var btn = driver.wait(until.elementLocated(By.id('submitbtn')), 2000);
btn.click();

