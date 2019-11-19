/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for starting and monitoring delete instructions
 */

const output = require("../output")
const input = require("../input")
const cypress = require("cypress")
const temp = require("temp")

var g_uids = [];
var g_data = {};
var g_dIntrductions = {};

function loadIntroductions() {

    // start spinner
    spinner = output.spinner.create("Load delete introductions ...")
    function count(obj) { return Object.keys(obj).length }

    // Get path for each entry
    g_uids.forEach(uid => {
        const url = g_data[uid].url

        if (url.includes("http")) {
            var url_path = url.split("/")[2]
        } else {
            var url_path = url.split("/")[0]
        }

        const path = url_path.split(".").reverse().join("/")
        g_dIntrductions[uid] = path
    });

    // stop spinner
    output.spinner.stop(spinner, count(g_dIntrductions) + "/" + count(g_data) + " have been found")
}


function run() {
    output.title("Processing")

    var steps = ["running ...", "done"]

    g_uids.forEach(uid => {
        var data = g_data[uid]

        // Get Progressbar
        pbar = output.progressbar.create(`(${uid})` + " " + data.url, steps)

        // 
        output.progressbar.start(pbar, steps[0])
        var cyrun = cypress.run({ spec: g_dIntrductions[uid] + "delete.js" })
        console.log(cyrun)
    });
}

function init(data) {
    g_data = data
    g_uids = Object.keys(data)

    loadIntroductions()
    run()
}

module.exports = {
    init
}