'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when arguments are passed through and generation happens with a dashed name as an argument', () => {
  before(helper('./foo', 'dash-named'));

  it('should create the dynamically named files named correctly', () => {
    assert.file([
      'src/components/dash-named/dash-named.js',
      'src/components/dash-named/dash-named.css',
      'src/components/dash-named/dash-named.jade'
    ]);
  });
});


