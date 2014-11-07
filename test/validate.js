'use strict';

describe('Validate', function() {

    var validate = require('../src/validate.js');

    describe('Checksum', function() {

        it('`711111111` should be valid', function() {
            expect(validate.checksum('711111111')).toEqual(true);
        });

        it('`123456789` should be valid', function() {
            expect(validate.checksum('123456789')).toEqual(true);
        });

        it('`490867715` should be valid', function() {
            expect(validate.checksum('490867715')).toEqual(true);
        });

        it('`888888888` should be invalid', function() {
            expect(validate.checksum('888888888')).toEqual(false);
        });

        it('`490067715` should be invalid', function() {
            expect(validate.checksum('490067715')).toEqual(false);
        });

        it('`012345678` should be invalid', function() {
            expect(validate.checksum('012345678')).toEqual(false);
        });

    });

    describe('Fix Charater', function() {

        var brokenChar = '' +
            '   \n' +
            '|_|\n' +
            ' _|\n' +
            '   \n';

        var correctChar = '' +
            ' _ \n' +
            '|_|\n' +
            ' _|\n' +
            '   \n';

        var filter = function(n) {
            return n.replace(/\n/g, '');
        };

        it('broken char should return 1 mismatch with correct char',
                function() {
            expect(validate.countMismatch(filter(brokenChar),
                                          filter(correctChar)))
                .toEqual(1);
        });

    /*
        xit('should fix a broken nine to an actual nine',
                function() {
            expect(validate.tryToFix(brokenChar))
                .toEqual(correctChar);
        });
        
        it('should fix a broken nine to an actual nine',
                function() {
            var filter = function(n) {
                return n.replace(/\n/g, '');
            };

            expect(validate.tryToFix(filter(brokenChar)))
                .toEqual(filter(correctChar));
        });
        */


    });
});

