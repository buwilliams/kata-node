'use strict';

var dict = require('./dict.js');
var parser = require('./parser.js');
var _ = require('lodash-node');

var newline = '\n'; // doesn't suppor \r

function replaceRange(str, replace, start) {
    var out = '';
    var end = start + replace.length - 1;
    for(var i=0; i<str.length; i++) {
        if(i >= start && i <= end) {
            out += replace.charAt(i - start);
        } else {
            out += str.charAt(i);
        }
    }
    return out;
}

function getUnparsedKey(character) {
    return dict.encode[character];
}

function unparseLine(line) {
    var out = [];
    var spacesLen = line.length * 3;

    // Create a new unparsed line
    _.times(4, function(n) {
        var spaces = '';
        _.times(spacesLen, function() {
            spaces += ' ';
        });
        out[n] = spaces;
    });

    // Replace with new unparsed content
    for (var i=0; i<line.length; i++) {
        var key = getUnparsedKey(line.charAt(i));
        var pos = parser.getPos(i+1);

        if(!_.isUndefined(key)) {
            out[0] = replaceRange(out[0], key.substring(0, 3), pos.start);
            out[1] = replaceRange(out[1], key.substring(3, 6), pos.start);
            out[2] = replaceRange(out[2], key.substring(6, 9), pos.start);
            out[3] = replaceRange(out[3], key.substring(9), pos.start);
        }
    }
    return out;
}

function concatAry(ary, newItems) {
    _.each(newItems, function(item) {
        ary.push(item);
    });
}

// This function takes a large string which could
// easily come from a file and parses it. This would
// likely be the only function called in this module.
function unparse(raw) {
    var out = [];
    var lines = raw.split(newline);
    for(var i=0; i<lines.length; i++) {
        var fourLineArray = unparseLine(lines[i]);
        concatAry(out, fourLineArray);
    }
    return out.join('\n');
}

exports.replaceRange = replaceRange;
exports.getUnparsedKey = getUnparsedKey;
exports.unparseLine = unparseLine;
exports.unparse = unparse;
