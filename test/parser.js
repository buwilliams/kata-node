'use strict';

describe('Parser', function() {

    var parser = require('../src/parser.js');
    var data = require('../src/sample-data.js');
    var ary = data.getArray();

    describe('Characters', function() {

        it('position 1 should return start 0 and end 3', function() {
            expect(parser.getPos(1)).toEqual({
                start: 0,
                end: 3
            });
        });

        it('position 2 should return start 3 and end 6', function() {
            expect(parser.getPos(2)).toEqual({
                start: 3,
                end: 6
            });
        });

        it('position 9 should return start 3 and end 6', function() {
            expect(parser.getPos(9)).toEqual({
                start: 24,
                end: 27
            });
        });

        it('position 1 should be the correct key sequence for the number one',
        function() {
            expect(parser.getKey(ary, 1))
                .toEqual('     |  |   ');
        });

        it('position 2 should be the correct key sequence for the number two',
        function() {
            expect(parser.getKey(ary, 2))
                .toEqual(' _  _||_    ');
        });

        it('position 9 should be the correct key sequence for the number nine',
        function() {
            expect(parser.getKey(ary, 9))
                .toEqual(' _ |_| _|   ');
        });

        it('position 1 should equal character number 1', function() {
            expect(parser.parseChar(ary, 1)).toEqual('1');
        });

        it('position 2 should equal character number 2', function() {
            expect(parser.parseChar(ary, 2)).toEqual('2');
        });

        it('position 3 should equal character number 3', function() {
            expect(parser.parseChar(ary, 3)).toEqual('3');
        });

        it('position 4 should equal character number 4', function() {
            expect(parser.parseChar(ary, 4)).toEqual('4');
        });
        
        it('position 5 should equal character number 5', function() {
            expect(parser.parseChar(ary, 5)).toEqual('5');
        });

        it('position 6 should equal character number 6', function() {
            expect(parser.parseChar(ary, 6)).toEqual('6');
        });

        it('position 7 should equal character number 7', function() {
            expect(parser.parseChar(ary, 7)).toEqual('7');
        });

        it('position 8 should equal character number 8', function() {
            expect(parser.parseChar(ary, 8)).toEqual('8');
        });

        it('position 9 should equal character number 9', function() {
            expect(parser.parseChar(ary, 9)).toEqual('9');
        });

    });

    describe('Line', function() {

        it('should be able to parse a whole line mixed', function() {
            expect(parser.parseLine(data.getArrayMix()))
                .toEqual('932456781');
        });

        it('should return underscores for bad data', function() {
            var badData = [];
            badData[0] += '';
            badData[1] += '';
            badData[2] += '';
            badData[3] += '';
            expect(parser.parseLine(badData)).toEqual('_________');
        });
    });

    describe('Raw', function() {
        
        it('10 lines should come out with 1-9 for each line', function() {
            var raw = data.getManyLines(10);
            var expected = '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n';
            expect(parser.parseRaw(raw)).toEqual(expected);
        });

        it('should ignore extra lines', function() {
            var raw = data.getManyLines(10);
            raw += 'some bogus data\n';
            var expected = '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n';
            expect(parser.parseRaw(raw)).toEqual(expected);
        });

        it('should parse bogus data', function() {
            var raw = data.getManyLines(10);
            raw += 'some bogus data\n';
            raw += 'some bogus data\n';
            raw += 'some bogus data\n';
            raw += 'some bogus data\n';
            var expected = '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n' + '123456789\n' + '123456789\n' +
                           '123456789\n' + '_________\n';
            expect(parser.parseRaw(raw)).toEqual(expected);
        });

    });

});
