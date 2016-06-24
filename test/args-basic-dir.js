'use strict';

var path = require('path'),
  assert = require('yeoman-assert'),
  helpers = require('yeoman-test'),
  os = require('os');

describe('when arguments are passed through and generation happens with a basic name passed as an argument', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './foo'))
      // always skip install in tests
      .withOptions({
        'skip-install': true
      })
      .withArguments('basic')
      .on('end', done);
  });

  it('should create the dynamically named files named correctly', function () {
    assert.file([
      'src/components/basic/basic.js',
      'src/components/basic/basic.jade'
    ]);
  });
});

