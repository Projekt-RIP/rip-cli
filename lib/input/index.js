/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for input processing
 */

const output = require("../output")

function data(args) {
    output.welcome()
    output.title("Preparation")

    switch (true) {
        case (args._.includes("parameter")):
            output.print("MODE: Parameter")
            spinner = output.spinner("Load accounts");
            data    = require("./parameter").convert(args)
            output.stopSpinner(spinner, Object.keys(data).length + " accounts has/have been found!")
            return data
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