/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 */

const input = require("./lib/input")
const processing = require("./lib/processing")
const output = require("./lib/output")
const args = require('minimist')(process.argv.slice(2))

function run() {

    // Check help message
    if ((args.h != undefined) || (args.help != undefined)) { output.utility.help(); process.exit(0) }
    
    // Output
    output.utility.welcome()
    output.title("Preparation")
    
    // data in specified json
    const data = input.data(args)
    processing.go(data)
}

run()