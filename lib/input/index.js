/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for input processing
 */

const output = require("../output")

function data(args) {
    switch (true) {
        case (args._.includes("parameter")):
            output.print("MODE: Parameter")
            spinner = output.spinner.create("Load accounts");
            data    = require("./parameter").convert(args)
            output.spinner.stop(spinner, Object.keys(data).length + " accounts has/have been found!", true)
            return data
            break;

        case (args._.includes("file") || args._.includes("interactive") || args._.includes("passwordmanager")):
            output.utility.help()
            output.err("Sorry, but this is not implemented yet!")
            break;

        default:
            output.utility.help()
            output.err("Invalid arguments: ", args);
            break;
    }
}

module.exports = {
    data
}