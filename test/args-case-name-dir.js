'use strict';

const assert = require('yeoman-assert');
const helper = require('./_helper');

describe('when arguments are passed through and generation happens with a cased name as an argument', () => {
  before(helper('./foo', 'casedName'));

  it('should create the dynamically named files named correctly', () => {
    assert.file([
      'src/components/cased-name/cased-name.js',
      'src/components/cased-name/cased-name.jade'
    ]);
  });
});


