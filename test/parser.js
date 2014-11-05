'use strict';

describe('Parser', function() {

    var parser = require('../src/parser.js');
    var data = require('../src/sample-data.js');

    it('position 1 should equal character number 1', function() {
        expect(parser.getChar(data.oneToNine, 1)).toEqual('1');
    });

    it('position 2 should equal character number 2', function() {
        expect(parser.getChar(data.oneToNine, 2)).toEqual('2');
    });

    it('position 3 should equal character number 3', function() {
        expect(parser.getChar(data.oneToNine, 3)).toEqual('3');
    });

    it('position 4 should equal character number 4', function() {
        expect(parser.getChar(data.oneToNine, 4)).toEqual('4');
    });
    
    it('position 5 should equal character number 5', function() {
        expect(parser.getChar(data.oneToNine, 5)).toEqual('5');
    });

    it('position 6 should equal character number 6', function() {
        expect(parser.getChar(data.oneToNine, 6)).toEqual('6');
    });

    it('position 7 should equal character number 7', function() {
        expect(parser.getChar(data.oneToNine, 7)).toEqual('7');
    });

    it('position 8 should equal character number 8', function() {
        expect(parser.getChar(data.oneToNine, 8)).toEqual('8');
    });

    it('position 9 should equal character number 9', function() {
        expect(parser.getChar(data.oneToNine, 9)).toEqual('9');
    });

});
