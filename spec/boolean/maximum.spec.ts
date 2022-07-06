import {MaximumParameters} from '../../dist/boolean/maximum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(MaximumParameters('', 1, false)).toBeTrue();
        expect(MaximumParameters('', 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(MaximumParameters('', 0,true)).toBeTrue();
        expect(MaximumParameters('abcdefghij', 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(MaximumParameters('a', 0,true)).toBeFalse();
        expect(MaximumParameters('abcdefghij01234', 10,true)).toBeFalse();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(MaximumParameters('', 1, false)).toBeTrue();
        expect(MaximumParameters('', 10, false)).toBeTrue();
    });

    it(`equal with limit`, () => {
        expect(MaximumParameters('a', 1,false)).toBeFalse();
        expect(MaximumParameters('abcdefghij', 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(MaximumParameters('a', 0,false)).toBeFalse();
        expect(MaximumParameters('abcdefghij01234', 10,false)).toBeFalse();
    });
});




