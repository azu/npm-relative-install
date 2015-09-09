// LICENSE : MIT
"use strict";
import optionator from "optionator";
export default optionator({
    prepend: "npm-relative-install [options]",
    concatRepeatedArrays: true,
    mergeRepeatedObjects: true,
    options: [
        {
            heading: "Options"
        }, {
            option: "help",
            alias: "h",
            type: "Boolean",
            description: "Show help."
        },
        {
            option: "package",
            alias: "p",
            type: "path::String",
            description: "package.json path",
            default: "./package.json"
        },
        {
            option: "installPath",
            alias: "d",
            type: "path::String",
            description: "install directory path.",
            required: true
        },
        {
            option: "diffType",
            type: "path::String",
            description: "diff type that is difference type of package version.",
            required: true,
            default: "patch"
        },
        {
            option: "version",
            alias: "v",
            type: "Boolean",
            description: "Outputs the version number."
        }
    ]
});
