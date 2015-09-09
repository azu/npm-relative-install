// LICENSE : MIT
"use strict";
import install from "../src/install"
var npmPkg = require("./fixtures/package.json");
describe("install", function () {
    it("should install to --installPath dir", function (done) {
        install(npmPkg, __dirname).then(result => {
            done();
        }).catch(function(error){
            done(error);
        });
    });
});