/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * The fancy banner of the rip-cli
 */

const cf = require("cfonts")
const tb = require("terminal-banner").terminalBanner

function title() {
    cf.say('Projekt-RIP', {
        font: 'block',              // define the font face
        align: 'center',            // define text alignment
        colors: ['red', '#f80'],    // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });
    cf.say('Take your "online" offline', {
        font: 'console',            // define the font face
        align: 'center',            // define text alignment
        colors: ['candy', '#f80'],  // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });
}

function subtitle() {
    cf.say('Developed during a project-management course|Coded with Love in Germany on GitHub', {
        font: 'console',              // define the font face
        align: 'center',            // define text alignment
        colors: ['system'],         // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1,           // define letter spacing
        lineHeight: 1,              // define the line height
        space: true,                // define if the output text should have empty lines on top and on the bottom
        maxLength: '0',             // define how many character can be on one line
    });
    
}

function banner() {
    tb("https://github.com/Projekt-RIP")
}

function print() {
    title()
    subtitle()
    banner()
}

module.exports = {
    print
}