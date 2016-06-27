'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when no arguments are passed through and generation happens in a case named directory', () => {
  before(helper('./caseNamed'));

  it('should create the dynamically named files named correctly', () => {
    assert.file([
      'src/components/case-named/case-named.js',
      'src/components/case-named/case-named.css',
      'src/components/case-named/case-named.jade'
    ]);
  });
});
