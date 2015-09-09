#!/usr/bin/env node
var runAsync = require("../lib/cli").runAsync;
runAsync(process.argv).then(function (result) {
    console.log(result);
    process.exit(0);
}).catch(function (error) {
    console.error(error);
    console.error(error.stack);
    process.exit(1);
});