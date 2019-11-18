/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Prints an error and exits the process
 */

const cf = require("cfonts")

 function p(msg) {
    console.log("")
    cf.say('Error', {
        font: 'console',            // define the font face
        align: 'left',            // define text alignment
        colors: ['red'],  // define all colors
        background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    });
    console.log(msg)
    process.exit(1)
 }

 module.exports = {
     p
 }