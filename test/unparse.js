'use strict';

describe('Unparse', function() {

    var unparse = require('../src/unparse.js');
    //var data = require('../src/sample-data.js');
    //var ary = data.getArray();

    describe('Replace Range', function() {

        it('`foo bar` should become `foo mix`', function() {
            expect(unparse.replaceRange('foo bar', 'mix', 4))
                .toEqual('foo mix');
        });

        it('`foo bar` should become `mix bar`', function() {
            expect(unparse.replaceRange('foo bar', 'mix', 0))
                .toEqual('mix bar');
        });

        it('`foo bar` should become `fooybar`', function() {
            expect(unparse.replaceRange('foo bar', 'y', 3))
                .toEqual('fooybar');
        });

    });

    describe('Unparse Line', function() {
        
        it('`0` should parse to the unparsed format', function() {
            var out = [
                ' _ ',
                '| |',
                '|_|',
                '   '
            ];
            expect(unparse.unparseLine('0')).toEqual(out);
        });

        it('`01` should parse to the unparsed format', function() {
            var out = [
                ' _    ',
                '| |  |',
                '|_|  |',
                '      '
            ];
            expect(unparse.unparseLine('01')).toEqual(out);
        });

    });

    describe('Unparse Raw', function() {

        it('string should return us a nice output', function() {
            var out = '' +
                '    _  _ \n' +
                '  | _| _|\n' +
                '  ||_  _|\n' +
                '         \n' +
                '    _  _ \n' +
                '|_||_ |_ \n' +
                '  | _||_|\n' +
                '         \n' +
                ' _  _  _ \n' +
                '  ||_||_|\n' +
                '  ||_| _|\n' +
                '         \n' +
                ' _  _  _ \n' +
                '| || || |\n' +
                '|_||_||_|\n' +
                '         ';
            expect(unparse.unparse('123\n456\n789\n000')).toEqual(out);
        });
    });

});
