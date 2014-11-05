'use strict';

function getFullArray() {
    var data = [];                                   
    data[0] = '    _  _     _  _  _  _  _  _ ';         
    data[1] = '  | _| _||_||_ |_   ||_||_|| |';         
    data[2] = '  ||_  _|  | _||_|  ||_| _||_|';         
    data[3] = '                              ';
    return data;
}

function getArray() {
    var data = [];                                   
    data[0] = '    _  _     _  _  _  _  _ ';         
    data[1] = '  | _| _||_||_ |_   ||_||_|';         
    data[2] = '  ||_  _|  | _||_|  ||_| _|';         
    data[3] = '                           ';
    return data;
}

function getArrayMix() {
    var data = [];                                   
    data[0] = ' _  _  _     _  _  _  _    ';         
    data[1] = '|_| _| _||_||_ |_   ||_|  |';         
    data[2] = ' _| _||_   | _||_|  ||_|  |';         
    data[3] = '                           ';
    return data;
}

function getLine() {
    var data = '';                                   
    data += '    _  _     _  _  _  _  _ ' + '\n';
    data += '  | _| _||_||_ |_   ||_||_|' + '\n';
    data += '  ||_  _|  | _||_|  ||_| _|' + '\n';
    data += '                           ' + '\n';
    return data;
}

function getManyLines(howMany) {
    var out = '';
    for(var i=0; i<howMany; i++) {
        out += getLine();
    }
    return out;
}

exports.getFullArray = getFullArray;
exports.getArray = getArray;
exports.getArrayMix = getArrayMix;
exports.getLine = getLine;
exports.getManyLines = getManyLines;
