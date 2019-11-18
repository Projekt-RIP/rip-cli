/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for output processing
 */

//const clear = require("clear")
const tb = require("terminal-banner").terminalBanner
const term = require("terminal-kit").terminal

// big functions
function help() { require("./help").print() }
function welcome() { term.clear(); require("./welcome-banner").print() }
function banner(msg) { tb(msg) }

// util functions
function title(str) { term.bold.underline.brightBlue(str + "\n") }
function space() { term.white("\n\n\n\n") }
function print(str) { term.white(str + "\n") } 
function err(msg) { term.red.bold("Oh now, a wild error appears! \n"); term.white(msg + " \n"); process.exit(1) }

function createProgressBar() {

}

module.exports = {
    welcome,
    help,
    banner,
    err,
    title,
    print,
}