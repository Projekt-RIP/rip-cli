/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 */

const welcomeBanner = require("./lib/welcome-banner")
const help = require("./lib/help")
var argv = require('minimist')(process.argv.slice(2))


function run() {
    switch (true) {
        case ((argv.h != undefined) || (argv.help != undefined)):
            help.printHelp()
            break;
            
        case (argv._.includes("parameter")):
            welcomeBanner.show()
            const inputModule = require("./lib/input/paramter")
            console.log(inputModule.convert(argv))
            break;

        case (argv._.includes("file") || argv._.includes("interactive") || argv._.includes("passwordmanager")):
            welcomeBanner.show()
            help.printHelp()
            require("terminal-banner").terminalBanner("Sorry, but this is not implemented yet!")
            break;
        
        default:
            console.log("Invalid arguments: ", argv);
            help.printHelp()
            process.exit(0)
            break;
    }
    
}

run()