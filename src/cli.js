// LICENSE : MIT
"use strict";
import options from "./options";
import install from "./install"
import path from "path";
export function runAsync(args) {
    return new Promise((resolve, reject) => {
        var currentOptions = options.parse(args);
        if (currentOptions.version) { // version from package.json
            resolve("v" + require("../package.json").version);
        } else if (currentOptions.help) {
            resolve(options.generateHelp());
        } else {
            var pkgPath = path.resolve(process.cwd(), currentOptions.package);
            var installDirPath = path.resolve(process.cwd(), currentOptions.installPath);
            var pkg = require(pkgPath);
            return install(pkg, installDirPath, currentOptions.diffType).catch(function (error) {
                console.log(error.message);
                console.log(error.stack);
            });
        }
        return resolve(options.generateHelp());
    });
}