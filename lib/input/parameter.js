/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Converts a parameter based input into the specified json-format
 */

const uid = require("uid")
const output = require("../output")

function checkParamters(args) {
    switch (true) {
        case ((args.u || args.username) == undefined):
            output.err("Paramter -u or --username is missing")
            break;
        case ((args.p || args.password) == undefined):
            output.err("Paramter -p or --password is missing")
            break;
        case ((args.d || args.domain)  == undefined):
            output.err("Paramter -d or --domain is missing")
            break;
        case ((args.u && args.username) != undefined):
            output.err("Double paramter!: Please use either -u or --username")
            break;
        case ((args.p && args.password) != undefined):
            output.err("Double paramter!: Please use either -p or --password")
            break;
        case ((args.d && args.domain) != undefined):
            output.err("Double paramter!: Please use either -d or --domain")
            break;
        default:
            break;
    }
}

function convert(args) {

    // Check if all paramters are provided
    checkParamters(args)

    // Create account entry
    const entry = {
        url: (args.d || args.domain),
        creds : {
            username: (args.u || args.username),
            password: [(args.p || args.password)],
        }
    } 

    // Combine everything
    var data = {}
        data[uid()] = entry
    
    return data 
}

module.exports = {
    convert
}