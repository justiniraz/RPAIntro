// require csvtojson
var csv = require("csvtojson");
var csvFilePath = 'testdata.csv';

// Convert a csv file with csvtojson
csv()
    .fromFile(csvFilePath)
    .then(function (jsonArrayObj) { //when parse finished, result will be emitted here.
        var keys = Object.keys(jsonArrayObj);
        for(var i=0;i<keys.length;i++){
            console.log(jsonArrayObj[keys[i]].FNAME);
        }
    })

