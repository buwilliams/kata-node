'use strict';

var _ = require('lodash-node');
var data = require('./sample-data');
var dict = require('./dict');

function log(pos, key, isPrefix) {
    isPrefix = (_.isUndefined(isPrefix)) ? false : isPrefix;

    if (isPrefix) {
        console.log('\'' + pos + '\': \'' + key + '\',');
    } else {
        console.log('\'' + key + '\': \'' + pos + '\',');
    }
}

function generate() {
    log(1, dict.getKey(data.oneToNine, 1), false);
    log(2, dict.getKey(data.oneToNine, 2), false);
    log(3, dict.getKey(data.oneToNine, 3), false);
    log(4, dict.getKey(data.oneToNine, 4), false);
    log(5, dict.getKey(data.oneToNine, 5), false);
    log(6, dict.getKey(data.oneToNine, 6), false);
    log(7, dict.getKey(data.oneToNine, 7), false);
    log(8, dict.getKey(data.oneToNine, 8), false);
    log(9, dict.getKey(data.oneToNine, 9), false);

    log(1, dict.getKey(data.oneToNine, 1), true);
    log(2, dict.getKey(data.oneToNine, 2), true);
    log(3, dict.getKey(data.oneToNine, 3), true);
    log(4, dict.getKey(data.oneToNine, 4), true);
    log(5, dict.getKey(data.oneToNine, 5), true);
    log(6, dict.getKey(data.oneToNine, 6), true);
    log(7, dict.getKey(data.oneToNine, 7), true);
    log(8, dict.getKey(data.oneToNine, 8), true);
    log(9, dict.getKey(data.oneToNine, 9), true);
}

exports.generate = generate;
