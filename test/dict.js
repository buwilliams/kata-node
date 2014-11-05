'use strict';

describe('dictionary', function() {

    var dict = require('../src/dict.js');
    var data = require('../src/sample-data.js');
    var ary = data.getArray();

    it('position 1 should return start 0 and end 3', function() {
        expect(dict.getPos(1)).toEqual({
            start: 0,
            end: 3
        });
    });

    it('position 2 should return start 3 and end 6', function() {
        expect(dict.getPos(2)).toEqual({
            start: 3,
            end: 6
        });
    });

    it('position 9 should return start 3 and end 6', function() {
        expect(dict.getPos(9)).toEqual({
            start: 24,
            end: 27
        });
    });

    it('position 1 should be the correct key sequence for the number one',
    function() {
        expect(dict.getKey(ary, 1))
            .toEqual('     |  |   ');
    });

    it('position 2 should be the correct key sequence for the number two',
    function() {
        expect(dict.getKey(ary, 2))
            .toEqual(' _  _||_    ');
    });

    it('position 9 should be the correct key sequence for the number nine',
    function() {
        expect(dict.getKey(ary, 9))
            .toEqual(' _ |_| _|   ');
    });

});
