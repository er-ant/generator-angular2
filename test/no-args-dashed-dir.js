'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when no arguments are passed through and generation happens in a dashed named directory', () => {
  before(helper('./dash-named'));

  it('should create the dynamically named files named correctly', () => {
    assert.file([
      'src/components/dash-named/dash-named.js',
      'src/components/dash-named/dash-named.jade'
    ]);
  });
});
