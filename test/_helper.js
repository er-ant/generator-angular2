'use strict';

const path = require('path');
const helpers = require('yeoman-test');
const os = require('os');

module.exports = (dir, args) => done =>
  helpers
    .run(path.join(__dirname, '../app'))
    .inDir(path.join(os.tmpdir(), dir))
    // always skip install in tests
    .withOptions({
      'skip-install': true
    })
    .withArguments(args || '')
    .on('end', done)
