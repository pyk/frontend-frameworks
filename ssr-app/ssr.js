// SSR.js
// A CLI interface for SSR (Server Side Rendered) app

// TODO: Update the `ssr serve --help` command
const serveHelp = () => {
    console.log("serve help")
    process.exit(0)
}

const serveInvalidOption = (option) => {
    console.log(`${option} is invalid option`)
    process.exit(1)
}

const serveApp = (options) => {
    // TODO: option PORT
    const validOptions = ["-h", "--help"]

    options.map((option) => {
        switch (option) {
            case "-h": serveHelp()
            case "--help": serveHelp()
            default: serveInvalidOption(option)
        }
    })

    // Get list of pages, build the endpoint
    // walk to sub directory
    // pages/index
    // pages/index/index.jsx
    // let say we have pages = ["index"], what's next?
    // Run server that have "/" as the route
    // pages = ["index"] => routes = ["/"]
    //
    process.exit(0)
}

// TODO: Update the help
const printHelp = () => {
    console.log("Usage:")
    console.log("    ssr COMMAND OPTIONS")
    console.log("")
    console.log("COMMAND:")
    console.log("    serve    Run the development server.")
    console.log("    build    Build the app")
}

const main = () => {

    const args = process.argv

    // Print help if there is no command
    if (args.length <= 2) {
        // TODO: print helps
        printHelp()
        return 0;
    }

    const command = args[2]
    const options = args.slice(3)
    switch (command) {
        case "serve": serveApp(options)
    }
}

main()