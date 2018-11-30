/*global datatype, describe, expect, it, pure, Symbol, xdescribe, xexpect, xit */
describe("JS personal library", function () {
    'use strict';

    describe("function pure", function () {
        it("correctly returns an integer", function () {
            expect(pure(0)).toBe(0);
            expect(pure('-666')).toBe(-666);
            expect(pure('0b11')).toBe(3);
            expect(pure('0o11')).toBe(9);
            expect(pure('0x11')).toBe(17);
        });
        it("correctly returns a float", function () {
            expect(pure(3.33)).toBe(3.33);
            expect(pure('-8.77')).toBe(-8.77);
        });
        it("correctly returns NaN", function () {
            expect(Number.isNaN(pure(NaN))).toBeTruthy();
        });
        it("correctly returns a boolean", function () {
            expect(pure(true)).toBe(true);
            expect(pure(false)).toBe(false);
        });
        it("correctly returns a string", function () {
            expect(pure('foo bar')).toBe('foo bar');
        });
    });

    describe("function datatype", function () {
        it("correctly recognizes integer", function () {
            expect(datatype(0)).toBe('integer');
            expect(datatype('0')).toBe('integer');
            expect(datatype(666)).toBe('integer');
            expect(datatype('666')).toBe('integer');
            expect(datatype(-666)).toBe('integer');
            expect(datatype('-666')).toBe('integer');
//            expect(datatype(0b11)).toBe('integer');
            expect(datatype('0b11')).toBe('integer');
//            expect(datatype(0o11)).toBe('integer');
            expect(datatype('0o11')).toBe('integer');
            expect(datatype(0x11)).toBe('integer');
            expect(datatype('0x11')).toBe('integer');
        });
        it("correctly recognizes number", function () {
            expect(datatype(6.666)).toBe('number');
            expect(datatype('6.666')).toBe('number');
            expect(datatype(-6.666)).toBe('number');
            expect(datatype('-6.666')).toBe('number');
        });
        it("correctly recognizes array", function () {
            expect(datatype([])).toBe('array');
        });
        it("correctly recognizes object", function () {
            expect(datatype({})).toBe('object');
        });
        it("correctly recognizes null", function () {
            expect(datatype(null)).toBe('null');
        });
        it("correctly recognizes undefined", function () {
            expect(datatype(undefined)).toBe('undefined');
        });
        it("correctly recognizes NaN", function () {
            expect(datatype(NaN)).toBe('NaN');
        });
        it("correctly recognizes string", function () {
            expect(datatype('foo')).toBe('string');
        });
        it("correctly recognizes boolean", function () {
            expect(datatype(true)).toBe('boolean');
            expect(datatype(false)).toBe('boolean');
        });
        it("correctly recognizes function", function () {
            var fnct = function () {
                return true;
            };
            expect(datatype(fnct)).toBe('function');
        });
        it("correctly recognizes symbol", function () {
            expect(datatype(Symbol('foo'))).toBe('symbol');
        });
    });
});
