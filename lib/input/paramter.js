/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Convets a parameter based input into the specified json-format
 */

const uid = require("uid")
const error = require("../error")


function checkParamters(args) {
    switch (true) {
        case ((args.u || args.username) == undefined):
            error.p("Paramter -u or --username is missing")
            break;
        case ((args.p || args.password) == undefined):
            error.p("Paramter -p or --password is missing")
            break;
        case ((args.d || args.domain)  == undefined):
            error.p("Paramter -d or --domain is missing")
            break;
        case ((args.u && args.username) != undefined):
            error.p("Double paramter!: Please use either -u or --username")
            break;
        case ((args.p && args.password) != undefined):
            error.p("Double paramter!: Please use either -p or --password")
            break;
        case ((args.d && args.domain) != undefined):
            error.p("Double paramter!: Please use either -d or --domain")
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