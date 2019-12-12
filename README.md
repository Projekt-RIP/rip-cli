# Projekt-RIP - Commandline Interface

This is a programm used to delete accounts on different websites.
The automation is based  on the CyPress testing tool (https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell).


## Installation
*Note*: This tool is in a prototyp state. It's not stable and the installation routine was written for developers 

#### Node
The rip-cli needs node.js to run. Please first install node from the [offical page](https://nodejs.org/de/). If you need a tutorial, here is one for [Linux 🇺🇸](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)

#### Git-Repository 
Clone the repository with `git clone https://github.com/Projekt-RIP/rip-cli` and switch into the directtory `cd rip-cli`

#### Initialize NPM
* Install dependencies: `npm install`
* Download the rip-collection: `npm run download`

## Usage
```
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
        Sorry, but this function is not implemented yet. 

```

## Contributing

### Roadmap
* Adding numerous websites
* Implementing improved Exception Handling
* Improving standardized output
* Including Database Interfaces for Password Managers e.g. KeePass, NPass, onepassword, Dashlane, etc.

## License
[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)
