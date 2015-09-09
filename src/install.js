// LICENSE : MIT
"use strict";
import npm from "npm"
import {getRelativeVersion} from "npm-relative-version"
function npmLoad() {
    if (npm.config.loaded) {
        return Promise.resolve(npm);
    }
    return new Promise((resolve, reject) => {
        npm.load((error, npm) => {
            if (error) {
                reject(error);
            } else {
                resolve(npm);
            }
        });
    });
}
export default function install(pkg, installDirPath, diffType = "patch") {
    var name = pkg["name"];
    return npmLoad().then(() => {
        return getRelativeVersion(pkg, {type: diffType});
    }).then((version) => {
        if (version == null) {
            return Promise.reject(new Error("not found installation version in " + name));
        }
        return new Promise((resolve, reject) => {
            var installModule = `${name}@${version}`;
            console.log("Installing... " + installModule);
            npm.commands.install(installDirPath, [installModule], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    });
}