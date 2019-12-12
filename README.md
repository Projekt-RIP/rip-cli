# Projekt-RIP - Commandline Interface
![Prototype](https://img.shields.io/badge/-prototype-critical)
![GitHub](https://img.shields.io/github/license/Projekt-RIP/rip-cli)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Projekt-RIP/rip-cli)

---

This is a programm used to delete accounts on different websites.
The automation is based on the cypress testing tool (https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell).


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

### Features

- [X] Added parameter mode
- [X] created delete-instructions for www.facebook.com
- [X] created delete-instructions for www.instagram.com
- [X] created delete-instructions for www.twitter.com

- [ ] Add re-captcha support
- [ ] Support advanced feedback like "Please don't log in again in the next 30 days ... "
- [ ] Add interactive mode
- [ ] Add file mode
- [ ] Add passwordmanager mode for e.g. KeePass, NPass, onepassword, Dashlane, etc.
- [ ] Add more delete-instructions for other sites
- [ ] Publish on npm

## License
[MIT](https://choosealicense.com/licenses/mit/)
