describe("Test Suite", function () {
    var csv = require("csvtojson");
    var csvFilePath = 'e2e/src/testdata.csv';


    var webdriver = require("selenium-webdriver"),
        By = webdriver.By,
        until = webdriver.until,
        Key = webdriver.Key;

    var username = '';
    var password = '';
    var firstName = '';





    // it("Test-Chrome", function () {
    //     csv()
    //         .fromFile(csvFilePath)
    //         .then(function (jsonArrayObj) { //when parse finished, result will be emitted here.
    //             var keys = Object.keys(jsonArrayObj);
    //             for (var i = 0; i < keys.length; i++) {
    //                 firstName = jsonArrayObj[keys[i]].FNAME;
    //                 username = jsonArrayObj[keys[i]].USERNAME;
    //                 password = jsonArrayObj[keys[i]].PASSWORD;

    //                 var chromeDriver = new webdriver.Builder()
    //                     .forBrowser('chrome')
    //                     .build();


    //                 chromeDriver.get('http://localhost:4200');
    //                 chromeDriver.manage().window().maximize();

    //                 chromeDriver.wait(until.elementLocated(By.id('firstName')), 2000).sendKeys(firstName);

    //                 chromeDriver.wait(until.elementLocated(By.id('email')), 2000).sendKeys(username);

    //                 chromeDriver.wait(until.elementLocated(By.id('password')), 2000).sendKeys(password, Key.RETURN);


    //                 chromeDriver.wait(until.elementLocated(By.id('username')), 50000).sendKeys(username);
    //                 chromeDriver.wait(until.elementLocated(By.id('pw')), 50000).sendKeys(password, Key.RETURN);




    //             }
    //         })

    // });


    it("Test-Firefox", function () {
        csv()
            .fromFile(csvFilePath)
            .then(function (jsonArrayObj) { //when parse finished, result will be emitted here.
                var keys = Object.keys(jsonArrayObj);
                for (var i = 0; i < keys.length; i++) {
                    firstName = jsonArrayObj[keys[i]].FNAME;
                    username = jsonArrayObj[keys[i]].USERNAME;
                    password = jsonArrayObj[keys[i]].PASSWORD;

                    var firefoxDriver = new webdriver.Builder()
                        .forBrowser('firefox')
                        .build();


                    firefoxDriver.get('http://localhost:4200');
                    firefoxDriver.manage().window().maximize();

                    firefoxDriver.wait(until.elementLocated(By.id('firstName')), 2000).sendKeys(firstName);

                    firefoxDriver.wait(until.elementLocated(By.id('email')), 2000).sendKeys(username);

                    firefoxDriver.wait(until.elementLocated(By.id('password')), 2000).sendKeys(password, Key.RETURN);

                   // firefoxDriver.wait(until.urlIs('http://localhost:4200/login?returnUrl=%2Fsuccess'));

                    firefoxDriver.wait(function() {
                        return firefoxDriver.getCurrentUrl().then(function(url) {
                          return url === 'http://localhost:4200/login?returnUrl=%2Fsuccess';
                        });
                      }, 1000);

                    firefoxDriver.wait(until.elementLocated(By.id('username')), 50000).sendKeys(username);
                    firefoxDriver.wait(until.elementLocated(By.id('pw')), 50000).sendKeys(password, Key.RETURN);

                }
            })

    });
})
