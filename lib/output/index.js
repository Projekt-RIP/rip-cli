/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for output processing
 */

// Requirements
//const clear = require("clear")
const tb = require("terminal-banner").terminalBanner
const term = require("terminal-kit").terminal
const clui = require("clui")
const logSym = require("log-symbols")

// big functions
function help() { require("./help").print() }
function welcome() { term.clear(); require("./welcome-banner").print() }
function banner(msg) { tb(msg) }

// util functions
function title(str) { space(); term.bold.underline.brightBlue(str + "\n") }
function space() { term.white("\n\n\n\n") }
function print(str) { term.white(str + "\n") } 
function err(msg) { term.red.bold("Oh now, a wild error appears! \n"); term.white(msg + " \n"); process.exit(1) }

//
function createProgressBar() {}
function spinner(title) {
    var spinner = new clui.Spinner(title)
        spinner.start()
    return spinner
}

function stopSpinner(spinner, msg) {
    spinner.stop()
    term.white(logSym.success + " " + msg + "\n")
}

module.exports = {
    welcome,
    help,
    banner,
    err,
    title,
    print,
    stopSpinner,
    spinner,
}