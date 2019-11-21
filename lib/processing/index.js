/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for starting and monitoring delete instructions
 */

const output = require("../output")
const cypress = require("cypress")
const fs = require("fs")

var g_uids = [];
var g_data = {};
var g_paths = {};
var g_logs = {};
var g_notDeletable = [];

function checkCollectionExists() {
    // start spinner
    spinner = output.spinner.create("Check if collection exits ...")

    // Check if the collection exits
    try {
        if (fs.existsSync("./collection")) {
            // Yep :)
            output.spinner.stop(spinner, "Collection exits", true)
        } else {
            // Nope :/
            output.spinner.stop(spinner, "Collection is missing", false)
            output.err("Collection is missing. Please run 'npm run download' !")
        }
    } catch (err) {
        // Oh PIEEEP, something went wrong :(
        output.err(err)
    }
}

function generatePaths() {

    // helper
    function count(obj) { return Object.keys(obj).length }

    // start spinner
    spinner = output.spinner.create("Load delete introductions ...")

    // generate and save the path for each uid/job
    g_uids.forEach(uid => {

        // Generate path
        const url = g_data[uid].url

        if (url.includes("http")) {
            var url_path = url.split("/")[2]
        } else {
            var url_path = url.split("/")[0]
        }

        const path = "/home/tjarbo/dev/rip-cli-copy/collection/" + url_path.split(".").reverse().join("/") + "/index.spec.js"

        // Check if the file exits
        try {
            if (fs.existsSync(path)) {
                // Jep - awesome! - save it
                g_paths[uid] = path
            } else {
                // Nope - sad! - keep it in mind
                g_notDeletable.push(uid)
            }
        } catch (err) {
            // Oh PIEEEP, something went wrong :(
            output.err(err)
        }
    });

    // stop spinner
    output.spinner.stop(spinner, count(g_paths) + "/" + count(g_data) + " have been found", true)
}

function performDeletion() {
    output.title("Processing")

    g_uids.forEach(uid => {

        // get needed data
        var data = g_data[uid]
        var path = g_paths[uid]

        // Check if there is a path for this uid/job
        if (g_paths[uid] == undefined) {
            // Nope :( - print a message
            output.fail(`Sorry, but there are no intstructions for ${data.url} yet`)
        } else {

            // Get Progressbar
            //pbar = output.progressbar.create(`(${uid})` + " " + data.url, steps)

            // Run Cypress
            // output.progressbar.start(pbar, steps[0])
            
            cypress.run({
                spec: path,
                env: {
                    user: data.creds.username,
                    password: data.creds.password[0]
                },
                reporterOptions: {
                    "toConsole": false
                }
            }).then((results) => {
                console.log(results)
            }).catch((err) => {
                console.error(err)
            })
        }
    });
}

function go(data) {
    g_data = data
    g_uids = Object.keys(data)

    checkCollectionExists() // step 1
    generatePaths()         // step 2
    performDeletion()       // step 3
}



module.exports = {
    go
}