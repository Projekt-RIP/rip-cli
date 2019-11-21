/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for starting and monitoring delete instructions
 */

const output = require("../output")
const input = require("../input")
const cypress = require("cypress")
const fs = require("fs")

var g_uids = [];
var g_data = {};
var g_dIntrductions = {};
var g_notDeletable = [];

function checkCollectionExists() {

    // start spinner
    spinner = output.spinner.create("Check if collection exits ...")

    try {
        if (fs.existsSync("./collection")) {
            output.spinner.stop(spinner, "Collection exits", true)
        } else {
            output.spinner.stop(spinner, "Collection is missing", false)
            output.err("Collection is missing. Please run 'npm run download' !")
        }
    } catch (err) {
        output.err(err)
    }
}

function getIntroductionsPaths() {

    // start spinner
    spinner = output.spinner.create("Load delete introductions ...")
    function count(obj) { return Object.keys(obj).length }

    // Get path for each entry
    g_uids.forEach(uid => {
        // Generate path
        const url = g_data[uid].url

        if (url.includes("http")) {
            var url_path = url.split("/")[2]
        } else {
            var url_path = url.split("/")[0]
        }
        const path = "/home/tjarbo/dev/rip-cli-copy/collection/" + url_path.split(".").reverse().join("/") + "/index.spec.js"

        // Check if a file exits
        try {
            if (fs.existsSync(path)) {
                g_dIntrductions[uid] = path //Save the paht
            } else {
                g_notDeletable.push(uid)
            }
        } catch (err) {
            output.err(err)
        }
    });

    // stop spinner
    output.spinner.stop(spinner, count(g_dIntrductions) + "/" + count(g_data) + " have been found", true)
}

function performDeletion() {
    output.title("Processing")

    var steps = ["running ...", "done"]


    g_uids.forEach(uid => {
        var data = g_data[uid]
        var path = g_dIntrductions[uid]
        
        if (g_dIntrductions[uid] == undefined) {
            output.fail(`Sorry, but there are no intstructions for ${data.url} yet`)
        } else {
            
            console.log(g_dIntrductions[uid])
            // Get Progressbar
            pbar = output.progressbar.create(`(${uid})` + " " + data.url, steps)

            // Run Cypress
            output.progressbar.start(pbar, steps[0])
            cypress.run({ 
                spec: path,
                env: {
                    user: data.creds.username,
                    password: data.creds.password[0]
                }
            }).then()
        }
    });
}

function init(data) {
    g_data = data
    g_uids = Object.keys(data)

    checkCollectionExists()

    getIntroductionsPaths()
    performDeletion()
}



module.exports = {
    init
}