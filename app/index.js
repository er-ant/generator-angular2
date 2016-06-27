'use strict';

var chalk = require('chalk');
var _ = require('lodash');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    // add option to skip install
    this.option('skip-install');
    this.argument('appname', {
      type: String,
      required: false
    });

    var appName = this.appname || path.basename(process.cwd());
    this.appname = _.kebabCase(appName);
    this.modulename = _.snakeCase(appName);
    this.classname = _.capitalize(_.camelCase(appName));
  },

  prompting: function () {
    // yeoman greeting
    this.log(yosay(
      'Yo! I\'m here to help build your ' +
      chalk.bold.yellow('Angular2') +
      ' application.'
    ));
  },

  writing: {
    app: function () {
      let componentPath = `src/components/${this.appname}/${this.appname}`;

      this.copy('.editorconfig', '.editorconfig');
      this.copy('.gitignore', '.gitignore');
      this.copy('.babelrc', '.babelrc');
      this.copy('.eslintrc', '.eslintrc');
      this.copy('.stylelintrc', '.stylelintrc');

      this.copy('package.json', 'package.json');
      this.copy('gulpfile.js', 'gulpfile.js');
      this.copy('readme.md', 'readme.md');

      this.copy('karma.conf.js', 'karma.conf.js');
      this.copy('karma.init.js', 'karma.init.js');
      this.copy('protractor.conf.js', 'protractor.conf.js');

      this.copy('src/index.js', 'src/index.js');
      this.copy('src/index.jade', 'src/index.jade');
      this.copy('src/index.css', 'src/index.css');
      this.copy('src/component/component.jade', `${componentPath}.jade`);
      this.copy('src/component/component.js', `${componentPath}.js`);
      this.copy('src/component/component.css', `${componentPath}.css`);
      this.copy('src/component/component.e2e.js', `${componentPath}.e2e.js`);
      this.copy('src/component/component.spec.js', `${componentPath}.spec.js`);
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false,
      callback: function () {
        this.emit('dependenciesInstalled');
      }.bind(this)
    });

    this.on('dependenciesInstalled', function () {
      this.spawnCommand('./node_modules/.bin/gulp').on('close', function () {
        this.log('');
        this.log('');
        this.log('Setup complete, run ' +
          chalk.bold.yellow('npm start') +
          ' to start serving the application' +
          ' (it\'ll also start watching for any changes you make).');
        this.log('');
      }.bind(this));
    }.bind(this));

  }
});
