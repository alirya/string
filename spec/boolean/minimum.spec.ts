import Minimum from '../../dist/boolean/minimum-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(Minimum('', 1, false)).toBeFalse();
        expect(Minimum('', 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(Minimum('', 0,true)).toBeTrue();
        expect(Minimum('abcdefghij', 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(Minimum('a', 0,true)).toBeTrue();
        expect(Minimum('abcdefghij01234', 10,true)).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(Minimum('', 1, false)).toBeFalse();
        expect(Minimum('', 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(Minimum('a', 1,false)).toBeFalse();
        expect(Minimum('abcdefghij', 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(Minimum('a', 0,false)).toBeTrue();
        expect(Minimum('abcdefghij01234', 10,false)).toBeTrue();
    });
});




