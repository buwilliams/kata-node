//var parser = require('./parse.js');
//var dict = require('./dict.js');

var newline = '\n';

function checksum(line) {
    var sum = 0;
    for (var i=0; i<9; i++) {
        sum += Number(line.charAt(i)) * (9 - i);
    }
    return (sum % 11) === 0;
}

function validateLines(lines) {
    var out = '';

    var chunks = lines.split(newline);

    for (var i=0; i<chunks.length; i++) {
        out += chunks[i];
        if(chunks[i].indexOf('?') > -1) {
            out += ' ILL' + newline;
        } else {
            out += (checksum(chunks[i])) ? newline : ' ERR' + newline;
        }
    }

    return out;
}

function countMismatch(key1, key2) {
    var mismatch = 0;
    for(var i=0; i<key1.length; i++) {
        var char1 = key1.charAt(i);
        var char2 = key2.charAt(i);
        if(char1 !== char2) {
            mismatch++;
        }
    }
    return mismatch;
}

function tryToFix(str) {
    return str;
}

exports.countMismatch = countMismatch;
exports.validateLines = validateLines;
exports.checksum = checksum;
exports.tryToFix = tryToFix;
