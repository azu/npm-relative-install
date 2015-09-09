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
            if (currentOptions.installDir == null) {
                reject(new Error("should be set --installDir directory."));
            }
            var installDirPath = path.resolve(process.cwd(), currentOptions.installDir);
            var pkg = require(pkgPath);
            install(pkg, installDirPath, currentOptions.diffType).then(result => {
                resolve("Success!");
            }).catch(function (error) {
                reject(error);
            });
        }
    });
}