/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Core module for starting and monitoring delete instructions
 */

const output = require("../output")

var g_uids = [];
var g_data = {};
var g_dIntrductions = {};

function loadIntroductions() {
    spinner = output.spinner.create("Load delete introductions ...")
    
    g_uids.forEach(uid => {
        g_dIntrductions[uid] = "BlaBlaBlub"
    });
    
    function count(obj) { return Object.keys(obj).length }

    output.spinner.stop(spinner, count(g_dIntrductions) + "/" + count(g_data) + " have been found")
}

function run() {
    output.title("Processing")

    var steps = ["load script", "running ...", "done"]
    g_uids.forEach(uid => {
        var data = g_data[uid]
        
        // Get Progressbar
        pbar = output.progressbar.create(uid + " - " +data.url, steps)
    
        setTimeout( () => {output.progressbar.done(pbar, steps[0])} , 500 + Math.random() * 1200 ) ;
        setTimeout( () => {output.progressbar.done(pbar, steps[1])} , 500 + Math.random() * 1200 ) ;
        setTimeout( () => {output.progressbar.done(pbar, steps[2]); output.success(`Task for ${data.url} completed successfully`);} , 500 + Math.random() * 1200 ) ;

        
    });
}

function init(data) {
    g_data = data
    g_uids = Object.keys(data)
    loadIntroductions();
    run();
}

module.exports = {
    init
}