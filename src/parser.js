'use strict';

var dict = require('./dict.js');

function getChar(fourLineArray, charPos) {
    return dict.decode[dict.getKey(fourLineArray, charPos)];
}

/*
function parseLine(fourLineArray) {
}

function parseManyLines(stringContent) {
}

function getArray(stringContent) {
    return stringContent.split(/\n/);
}
*/

exports.getChar = getChar;
//exports.parseLine = parseLine;
//exports.parseManyLines = parseManyLines;
//exports.getArray = getArray;
