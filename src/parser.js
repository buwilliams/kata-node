'use strict';

var dict = require('./dict.js');

function parseChar(fourLineArray, charPos) {
    return dict.decode[dict.getKey(fourLineArray, charPos)];
}

function parseLine(fourLineArray) {
    var out = '';
    for (var i=1; i<10; i++) {
        var result = parseChar(fourLineArray, i);
        out += (result) ? result : '_';
    }
    return out + /\n/;
}

function parseRaw(raw) {
    var out = '';
    var lines = raw.split(/\n/);
    var curLine = 0;
    while (curLine < lines.length) {
        var fourLineArray = lines.slice(curLine, curLine+4);
        out += parseLine(fourLineArray);
        curLine += 4;
    }
    return out;
}

exports.parseChar = parseChar;
exports.parseLine = parseLine;
exports.parseRaw = parseRaw;
