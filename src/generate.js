'use strict';

var _ = require('lodash-node');
var data = require('./sample-data.js');
var parser = require('./parse.js');
var ary = data.getFullArray();

function log(pos, key, isPrefix) {
    isPrefix = (_.isUndefined(isPrefix)) ? false : isPrefix;

    if (isPrefix) {
        console.log('\'' + pos + '\': \'' + key + '\',');
    } else {
        console.log('\'' + key + '\': \'' + pos + '\',');
    }
}

function generate() {
    log(0, parser.getKey(ary, 0), false);
    log(1, parser.getKey(ary, 1), false);
    log(2, parser.getKey(ary, 2), false);
    log(3, parser.getKey(ary, 3), false);
    log(4, parser.getKey(ary, 4), false);
    log(5, parser.getKey(ary, 5), false);
    log(6, parser.getKey(ary, 6), false);
    log(7, parser.getKey(ary, 7), false);
    log(8, parser.getKey(ary, 8), false);
    log(9, parser.getKey(ary, 9), false);

    log(0, parser.getKey(ary, 0), true);
    log(1, parser.getKey(ary, 1), true);
    log(2, parser.getKey(ary, 2), true);
    log(3, parser.getKey(ary, 3), true);
    log(4, parser.getKey(ary, 4), true);
    log(5, parser.getKey(ary, 5), true);
    log(6, parser.getKey(ary, 6), true);
    log(7, parser.getKey(ary, 7), true);
    log(8, parser.getKey(ary, 8), true);
    log(9, parser.getKey(ary, 9), true);
}

exports.generate = generate;
