/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for output processing
 */

// Requirements
const tb = require("terminal-banner").terminalBanner
const term = require("terminal-kit").terminal
const clui = require("clui")
const logSym = require("log-symbols")


// core functions
function print(msg)   { term.white(msg + "\n") } 
function success(msg) { term.white(logSym.success + ` ${msg} \n`)}
function fail(msg)    { term.white(logSym.error + ` ${msg} \n`)}
function err(msg)     { term.red.bold("Oh no, a wild ERROR appeared! \n"); term.white(msg + " \n"); process.exit(1) }
function title(msg)   { space(); term.bold.underline.brightBlue(msg + "\n") }
function banner(msg)  { tb(msg) }


// utility functions
function help()      { require("./help").print() }
function welcome()   { term.clear(); require("./welcome-banner").print() }
function yesorno(options, callback)  { term.yesOrNo(options, callback)}


// helper functions
function space() { term.white("\n\n\n\n") }


// ProgressBar
function progressbar_create(title, steps) {
    return term.progressBar( {
        width: 100 ,
        title: title ,
        eta: false ,
        percent: true ,
        items: steps.length
    }) ;
}

function progressbar_startItem(pbar, step) { pbar.startItem(step) }
function progressbar_doneItem(pbar, step) { pbar.itemDone(step) }
function progressbar_stop(pbar) { pbar.stop() }


// Spinner
function spinner_create(title) {
    var spinner = new clui.Spinner(title)
        spinner.start()
    return spinner
}

function spinner_stop(spinner, msg, successful) {
    spinner.stop()
    successful ? success(msg) : fail(msg)
}


module.exports = {
    print,
    success,
    fail,
    err,
    title,
    banner,
    utility: {
        welcome,
        help,
    },
    spinner: {
        create: spinner_create,
        stop:   spinner_stop
    },
    progressbar : {
        create: progressbar_create,
        stop:   progressbar_stop,
        start:  progressbar_startItem,
        done:   progressbar_doneItem,
    }
}