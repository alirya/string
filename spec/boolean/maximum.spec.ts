import Maximum from "../../dist/boolean/maximum-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(Maximum('', 1, false)).toBeTrue();
        expect(Maximum('', 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(Maximum('', 0,true)).toBeTrue();
        expect(Maximum('abcdefghij', 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(Maximum('a', 0,true)).toBeFalse();
        expect(Maximum('abcdefghij01234', 10,true)).toBeFalse();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(Maximum('', 1, false)).toBeTrue();
        expect(Maximum('', 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(Maximum('a', 1,false)).toBeFalse();
        expect(Maximum('abcdefghij', 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(Maximum('a', 0,false)).toBeFalse();
        expect(Maximum('abcdefghij01234', 10,false)).toBeFalse();
    });
});




