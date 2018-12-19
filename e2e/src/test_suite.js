describe("Inner Suite 1", function () {
    var webdriver = require("selenium-webdriver"),
        By = webdriver.By,
        until = webdriver.until;

    username = 'admin@cedrus.digital';
    password = 'password';
    firstName = 'Justin';

    var chromeDriver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();


    var safariDriver = new webdriver.Builder()
        .forBrowser('safari')
        .build();

    var ffDriver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();




    it("Test-Chrome", function () {

        chromeDriver.get('http://localhost:4200');

        var fName = chromeDriver.wait(until.elementLocated(By.id('firstName')), 2000);
        fName.sendKeys(firstName);

        var user = chromeDriver.wait(until.elementLocated(By.id('email')), 2000);
        user.sendKeys(username);

        var pw = chromeDriver.wait(until.elementLocated(By.id('password')), 2000);
        pw.sendKeys(password);

        var btn = chromeDriver.wait(until.elementLocated(By.id('submitbtn')), 2000);
        btn.click();

        chromeDriver.quit();

    });

    it("Test-Safari", function () {


        safariDriver.get('http://localhost:4200');

        var fName = safariDriver.wait(until.elementLocated(By.id('firstName')), 2000);
        fName.sendKeys(firstName);

        var user = safariDriver.wait(until.elementLocated(By.id('email')), 2000);
        user.sendKeys(username);

        var pw = safariDriver.wait(until.elementLocated(By.id('password')), 2000);
        pw.sendKeys(password);

        var btn = safariDriver.wait(until.elementLocated(By.id('submitbtn')), 2000);
        btn.click();

        safariDriver.quit();


    });

    it("Test-Firefox", function () {

        ffDriver.get('http://localhost:4200');

        var fName = ffDriver.wait(until.elementLocated(By.id('firstName')), 2000);
        fName.sendKeys(firstName);

        var user = ffDriver.wait(until.elementLocated(By.id('email')), 2000);
        user.sendKeys(username);

        var pw = ffDriver.wait(until.elementLocated(By.id('password')), 2000);
        pw.sendKeys(password);

        var btn = ffDriver.wait(until.elementLocated(By.id('submitbtn')), 2000);
        btn.click();

        ffDriver.quit();

    });

});