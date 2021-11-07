import Maximum from "../../dist/boolean/maximum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(Maximum.Parameters('', 1, false)).toBeTrue();
        expect(Maximum.Parameters('', 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(Maximum.Parameters('', 0,true)).toBeTrue();
        expect(Maximum.Parameters('abcdefghij', 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(Maximum.Parameters('a', 0,true)).toBeFalse();
        expect(Maximum.Parameters('abcdefghij01234', 10,true)).toBeFalse();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(Maximum.Parameters('', 1, false)).toBeTrue();
        expect(Maximum.Parameters('', 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(Maximum.Parameters('a', 1,false)).toBeFalse();
        expect(Maximum.Parameters('abcdefghij', 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(Maximum.Parameters('a', 0,false)).toBeFalse();
        expect(Maximum.Parameters('abcdefghij01234', 10,false)).toBeFalse();
    });
});




