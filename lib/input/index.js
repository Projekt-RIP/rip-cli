/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for input processing
 */

const output = require("../output")

function data(args) {
    switch (true) {
        case ((args.h != undefined) || (args.help != undefined)):
            output.help()
            break;

        case (args._.includes("parameter")):
            output.welcome()
            return require("./parameter").convert(args)
            break;

        case (args._.includes("file") || args._.includes("interactive") || args._.includes("passwordmanager")):
            output.welcome()
            output.help()
            output.err("Sorry, but this is not implemented yet!")
            break;

        default:
            output.err("Invalid arguments: ", args);
            output.help()
            process.exit(0)
            break;
    }
}

module.exports = {
    data
}