'use strict';

var path = require('path'),
  assert = require('yeoman-assert'),
  helpers = require('yeoman-test'),
  os = require('os');

describe('when no arguments are passed through and generation happens in a basic named directory', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './basic'))
      // always skip install in tests
      .withOptions({
        'skip-install': true
      })
      .on('end', done);
  });

  it('should create the dynamically named files named correctly', function () {
    assert.file([
      'src/components/basic/basic.js',
      'src/components/basic/basic.jade'
    ]);
  });
});
