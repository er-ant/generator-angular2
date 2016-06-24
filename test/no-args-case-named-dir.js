'use strict';

var path = require('path'),
  assert = require('yeoman-assert'),
  helpers = require('yeoman-test'),
  os = require('os');

describe('when no arguments are passed through and generation happens in a case named directory', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './caseNamed'))
      // always skip install in tests
      .withOptions({
        'skip-install': true
      })
      // .withArguments('fake-app-name')
      .on('end', done);
  });

  it('should create the dynamically named files named correctly', function () {
    assert.file([
      'src/components/case-named/case-named.js',
      'src/components/case-named/case-named.jade'
    ]);
  });
});
