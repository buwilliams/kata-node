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

exports.validateLines = validateLines
exports.checksum = checksum;
