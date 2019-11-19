/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for input processing
 */

const output = require("../output")

function data(args) {
    output.utility.welcome()
    output.title("Preparation")

    switch (true) {
        case (args._.includes("parameter")):
            output.print("MODE: Parameter")
            spinner = output.spinner.create("Load accounts");
            data    = require("./parameter").convert(args)
            output.spinner.stop(spinner, Object.keys(data).length + " accounts has/have been found!", true)
            return data
            break;

        case (args._.includes("file") || args._.includes("interactive") || args._.includes("passwordmanager")):
            output.utility.welcome()
            output.utility.help()
            output.err("Sorry, but this is not implemented yet!")
            break;

        default:
            output.err("Invalid arguments: ", args);
            output.utility.help()
            process.exit(0)
            break;
    }
}

module.exports = {
    data
}