/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 21.11.2019
 * 
 * A beautyful result
 */

const logSym = require("log-symbols")
const term = require("terminal-kit").terminal

function symbol(value) {
    switch (value) {
        case 0: // success
            return logSym.success
            break;
        case 1: // failed
            return logSym.error
            break;    
        case "BANANAAAAAA": // something strange
            return logSym.warning
            break;    
        default:
            return ""
            break;
    }
}

function print(logs) {
    // Generate a Line for each uid
    for (var uid in logs) {
        var data = logs[uid]
        term.white(symbol(data.success)).bold(" " + uid + " - " + data.url).white(": " + data.msg + "\n")
    }
}


module.exports = {
    print
}



