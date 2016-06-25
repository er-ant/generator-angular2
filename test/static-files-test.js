'use strict';

var path = require('path'),
  assert = require('yeoman-assert'),
  helpers = require('yeoman-test'),
  os = require('os');

describe('when angular2 generator generates', function () {

  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './foo'))
      // always skip install in tests
      .withOptions({
        'skip-install': true
      })
      .on('end', done);
  });

  it('should create the required static files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'readme.md',
      'gulpfile.js',
      'src/index.js',
      'src/index.jade'
    ]);
  });

});
