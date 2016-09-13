# Pokédex

### Live Demo
--------
http://pedroesperanca.github.io/pokedex


### Executables
--------

install: `npm install`

start: `gulp`

build: `gulp webpack`

test: `npm test`

scafold a new component: `gulp component` [Read below](#generating-components) for usage details

### implementation details
--------
The app was initially an NG6-starter starter, then additional components were developed to achieve a pokedex app.

In order to reduce server and increase navigation speed data requested is never is never asked for twice.


### preprocessors, frameworks and why
--------

- sass: much more organized than regular css

- angular: this framework offers support for all parts of an MVC app

- NG6-starter: a starter to bootstrap the app base structure and also offers commands for easily adding new components

- gulp.js: a simple task runner


### Generating Components
--------
Following a consistent directory structure between components offers us the certainty of predictability. We can take advantage of this certainty by creating a gulp task to automate the "instantiation" of our components. The component boilerplate task generates this:
```
⋅⋅⋅⋅⋅⋅componentName/
⋅⋅⋅⋅⋅⋅⋅⋅componentName.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅componentName.component.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.html
⋅⋅⋅⋅⋅⋅⋅⋅componentName.sass // scoped to affect only its own template
⋅⋅⋅⋅⋅⋅⋅⋅componentName.spec.js // contains passing demonstration tests
```

You may, of course, create these files manually, every time a new module is needed, but that gets quickly tedious.
To generate a component, run `gulp component --name componentName`.

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `client/app/components`. To change this, apply the `--parent` flag, followed by a path relative to `client/app/components/`.

For example, running `gulp component --name signup --parent auth` will create a `signup` component at `client/app/components/auth/signup`.  

Running `gulp component --name footer --parent ../common` creates a `footer` component at `client/app/common/footer`.  

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to camelcase the component names.
