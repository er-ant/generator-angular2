'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when angular2 generator generates', () => {
  before(helper('./foo'));

  it('should create the required static files', () => {
    assert.file([
      '.editorconfig',
      '.gitignore',
      '.babelrc',
      '.eslintrc',
      '.stylelintrc',

      'package.json',
      'gulpfile.js',
      'readme.md',

      'karma.conf.js',
      'karma.init.js',
      'protractor.conf.js',

      'src/index.js',
      'src/index.css',
      'src/index.jade'
    ]);
  });

});