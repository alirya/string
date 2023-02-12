import {MinimumParameters} from '../../dist/boolean/minimum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`inclusive`,function() {

    it(`lower with limit`, () => {
        expect(MinimumParameters('', 1, false)).toBeFalse();
        expect(MinimumParameters('', 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(MinimumParameters('', 0,true)).toBeTrue();
        expect(MinimumParameters('abcdefghij', 10,true)).toBeTrue();
    });

    it(`greater than limit`, () => {
        expect(MinimumParameters('a', 0,true)).toBeTrue();
        expect(MinimumParameters('abcdefghij01234', 10,true)).toBeTrue();
    });
});

describe(`exclusive`,function() {

    it(`lower with limit`, () => {
        expect(MinimumParameters('', 1, false)).toBeFalse();
        expect(MinimumParameters('', 10, false)).toBeFalse();
    });

    it(`equal with limit`, () => {
        expect(MinimumParameters('a', 1,false)).toBeFalse();
        expect(MinimumParameters('abcdefghij', 10,false)).toBeFalse();
    });

    it(`greater than limit`, () => {
        expect(MinimumParameters('a', 0,false)).toBeTrue();
        expect(MinimumParameters('abcdefghij01234', 10,false)).toBeTrue();
    });
});




