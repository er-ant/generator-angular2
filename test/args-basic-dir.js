'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when arguments are passed through and generation happens with a basic name passed as an argument', () => {
  before(helper('./foo', 'basic'));

  it('should create the dynamically named files named correctly', () => {
    assert.file([
      'src/components/basic/basic.js',
      'src/components/basic/basic.css',
      'src/components/basic/basic.jade'
    ]);
  });
});

