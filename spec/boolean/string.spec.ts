import StringGuard from '../../dist/boolean/string.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    const a : unknown = '1';

    if(StringGuard(a)) {

        const n : string = a;

    } else {

        // @ts-expect-error
        const n : string = a;
    }

});

describe(`number`,function() {

    it(`integer`, () => {
        expect(StringGuard(1)).toBeFalse();
    });

    it(`float`, () => {
        expect(StringGuard(1.1)).toBeFalse();
    });

    it(`infinity`, () => {
        expect(StringGuard(Infinity)).toBeFalse();
    });

    it(`Nan`, () => {
        expect(StringGuard(NaN)).toBeFalse();
    });
});

describe('boolean', function() {

    it(`true`, () => {
        expect(StringGuard(true)).toBeFalse();
    });

    it(`false`, () => {
        expect(StringGuard(false)).toBeFalse();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(StringGuard('str')).toBeTrue();
    });

    it(`object`, () => {
        expect(StringGuard(new String('str'))).toBeFalse();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(StringGuard({})).toBeFalse();
    });

    it(`instance`, () => {
        expect(StringGuard(new Map())).toBeFalse();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(StringGuard(function () {})).toBeFalse();
    });

    it(`anonymous arrow`, () => {
        expect(StringGuard(()=>{})).toBeFalse();
    });

    it(`named`, () => {
        expect(StringGuard(isNaN)).toBeFalse();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(StringGuard(null)).toBeFalse();
    });

    it(`undefined`, () => {
        expect(StringGuard(undefined)).toBeFalse();
    });

});



