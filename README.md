# Generator Angular2

[Yeoman](http://yeoman.io) for bootstrapping Angular2 application. (frontend, ready for gh-pages)

## Usage

Install yo and this generator globally

```
npm install -g yo generator-angular2
```

To create a project:

```
mkdir MyApp
cd MyApp
yo angular2
```

## Run

To start server, in project directory run

```
npm run
```

Generated project contain example component and tests (e2e with protractor and karma unit), to run tests

```
npm test
```

## Features

- gulp
- babel
- browserify
- angular2 (rc3)
- protractor
- eslint
- postcss
- stylelint
- jade

etc

## Contributing

Please read [Contributing](CONTRIBUTING.md)

All contributions are more than welcome, no matter how large or small.

Clone the repository and `cd` into it

`git clone git@github.com:swirlycheetah/generator-angular2.git && cd generator-angular2`

Install the project dependencies

`npm install`

Link the package to use the version you're working on

`npm link`

Run the tests to ensure no failures

`npm test`

Submit a pull request with your changes

## License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)