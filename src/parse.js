'use strict';

var dict = require('./dict.js');
var _ = require('lodash-node');

var newline = '\n'; // doesn't suppor \r
var invalid = '?'; // doesn't suppor \r

function getPos(charPos) {

    var start = (charPos * 3) - 3;
    var end = start + 3;

    return {
        start: start,
        end: end
    };
}

function getKey(fourLineArray, charPos) {

    var out = '';
    var pos = getPos(charPos);

    for (var i=0; i<4; i++) {
        try {
            out += fourLineArray[i].substring(pos.start, pos.end);
        } catch(e) {
            console.error('ERROR in getKey():', e);
        }
    }

    return out;
}

function parseChar(fourLineArray, charPos) {
    // validation goes here
    return dict.decode[getKey(fourLineArray, charPos)];
}

function parseLine(fourLineArray) {
    var out = '';
    for (var i=1; i<10; i++) {
        var result = parseChar(fourLineArray, i);
        out += (_.isUndefined(result)) ? invalid : result;
    }
    return out;
}

// This function takes a large string which could
// easily come from a file and parses it. This would
// likely be the only function called in this module.
function parseRaw(raw) {
    var out = '';
    var lines = raw.split(newline);
    var curLine = 0;
    while ((curLine + 4) < lines.length) {
        var fourLineArray = lines.slice(curLine, curLine+4);
        out += parseLine(fourLineArray) + newline;
        curLine += 4;
    }
    return out;
}

exports.getPos = getPos;
exports.getKey = getKey;
exports.parseChar = parseChar;
exports.parseLine = parseLine;
exports.parseRaw = parseRaw;
