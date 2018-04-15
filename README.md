# Frontend Frameworks
I want to build a product. To build the product, I need to learn the
front-end development.

- The framework should well-organized in the file system & logically.
  If I want to change the CSS I know which folder, If I want
  to change the action that called in the view
  I know where to edit the file.
- The UI should be organized in components. Well isolated and re-usable.

For the training purpose I will clone this
[site](https://learnnextjs.com/basics/getting-started).
Because the site contains a basic features that good for the first time:

- Displaying a static site
- Login (session management)
- User data management

Okay let's do this.

## Glimmer.js
The documentation is available [here](https://glimmerjs.com/).

Start from route `/`.

TO BE CONTINUED.


## SSR.js - Server Side Rendered App

## Create a new SSR app

    ssr new myapp

This command will generate a new directory `myapp`.

The `myapp` directory will contains:

```
.
├── package-lock.json
├── package.json
└── pages
    └── index
        └── index.hbs

```

With all dependencies are installed.

## Run the SSR app

    ssr serve

This command will run the development server, all changes will
be reloaded.
