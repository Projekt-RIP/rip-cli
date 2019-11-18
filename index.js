/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 */

const input = require("./lib/input")
const processing = require("./lib/processing")
const output = require("./lib/output")
const argv = require('minimist')(process.argv.slice(2))

function run() {
    const data = input.data(argv)
}

run()