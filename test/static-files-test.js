'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when angular2 generator generates', () => {
  before(helper('./foo'));

  it('should create the required static files', () => {
    assert.file([
      'package.json',
      '.editorconfig',
      '.gitignore',
      'readme.md',
      'gulpfile.js',
      'src/index.js',
      'src/index.jade'
    ]);
  });

});