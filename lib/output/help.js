/**
 * Projekt-RIP (https://github.com/Projekt-RIP/)
 * 15.11.2019
 * 
 * Help message: 'rip -h' or 'rip --help'
 */


var text = `
Usage: rip <mode> <options>
Where <mode> is one of:

    parameter:
        -u, --username:specify the username
        -p, --password:specify the password 
        -d, --domain:  specify the domain

    interavtive:
        Sorry, but this function is not implemented yet. 
    
    passwordmanager:
        Sorry, but this function is not implemented yet. 

    file:
        Sorry, but this function is not implemented yet
`

function print() {
    console.log(text)
}

module.exports = {
    print
}