'use strict';

var _ = require('lodash-node');
var data = require('./sample-data');
var dict = require('./dict');
var ary = data.getArray();

function log(pos, key, isPrefix) {
    isPrefix = (_.isUndefined(isPrefix)) ? false : isPrefix;

    if (isPrefix) {
        console.log('\'' + pos + '\': \'' + key + '\',');
    } else {
        console.log('\'' + key + '\': \'' + pos + '\',');
    }
}

function generate() {
    log(1, dict.getKey(ary, 1), false);
    log(2, dict.getKey(ary, 2), false);
    log(3, dict.getKey(ary, 3), false);
    log(4, dict.getKey(ary, 4), false);
    log(5, dict.getKey(ary, 5), false);
    log(6, dict.getKey(ary, 6), false);
    log(7, dict.getKey(ary, 7), false);
    log(8, dict.getKey(ary, 8), false);
    log(9, dict.getKey(ary, 9), false);

    log(1, dict.getKey(ary, 1), true);
    log(2, dict.getKey(ary, 2), true);
    log(3, dict.getKey(ary, 3), true);
    log(4, dict.getKey(ary, 4), true);
    log(5, dict.getKey(ary, 5), true);
    log(6, dict.getKey(ary, 6), true);
    log(7, dict.getKey(ary, 7), true);
    log(8, dict.getKey(ary, 8), true);
    log(9, dict.getKey(ary, 9), true);
}

exports.generate = generate;
