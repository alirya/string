import Minimum from "../../dist/boolean/minimum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(Minimum.Parameters('', 1, false)).toBeFalse();
        expect(Minimum.Parameters('', 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(Minimum.Parameters('', 0,true)).toBeTrue();
        expect(Minimum.Parameters('abcdefghij', 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(Minimum.Parameters('a', 0,true)).toBeTrue();
        expect(Minimum.Parameters('abcdefghij01234', 10,true)).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(Minimum.Parameters('', 1, false)).toBeFalse();
        expect(Minimum.Parameters('', 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(Minimum.Parameters('a', 1,false)).toBeFalse();
        expect(Minimum.Parameters('abcdefghij', 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(Minimum.Parameters('a', 0,false)).toBeTrue();
        expect(Minimum.Parameters('abcdefghij01234', 10,false)).toBeTrue();
    });
});




