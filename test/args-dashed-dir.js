'use strict';

var path = require('path'),
  assert = require('yeoman-assert'),
  helpers = require('yeoman-test'),
  os = require('os');

describe('when arguments are passed through and generation happens with a dashed name as an argument', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './foo'))
      // always skip install in tests
      .withOptions({
        'skip-install': true
      })
      .withArguments('dash-named')
      .on('end', done);
  });

  it('should create the dynamically named files named correctly', function () {
    assert.file([
      'src/components/dash-named/dash-named.js',
      'src/components/dash-named/dash-named.jade'
    ]);
  });
});


