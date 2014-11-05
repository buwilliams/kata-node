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

});

