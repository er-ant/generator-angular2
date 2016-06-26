'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when no arguments are passed through and generation happens in a basic named directory', () => {
  before(helper('./basic'));

  it('should create the dynamically named files named correctly', () => {
    assert.file([
      'src/components/basic/basic.js',
      'src/components/basic/basic.jade'
    ]);
  });
});
