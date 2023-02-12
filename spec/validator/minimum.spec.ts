import {MinimumParameters} from '../../dist/validator/minimum.js';
import MinimumString from '../../dist/assert/string/minimum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const validator = MinimumParameters(1, false, MinimumString.Parameters);
    const greater = validator('ab');

    it('set valid', ()=>{

        try {
            // @ts-expect-error
            greater.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expect-error
            greater.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expect-error
            greater.minimum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expect-error
            greater.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        const validator = MinimumParameters(1, true, MinimumString.Parameters);
        const greater = validator('1');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('1');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = MinimumParameters(1, false, MinimumString.Parameters);
        const greater = validator('1');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('1');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        const validator = MinimumParameters<string>(1, true, MinimumString.Parameters);
        const greater = validator('ab');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('ab');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = MinimumParameters<string>(1, false, MinimumString.Parameters);
        const greater = validator('ab');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('ab');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        const validator = MinimumParameters(2, true, MinimumString.Parameters);
        const greater = validator('a');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('a');
            expect(greater.minimum).toBe(2);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const validator = MinimumParameters(2, false, MinimumString.Parameters);
        const greater = validator('a');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('a');
            expect(greater.minimum).toBe(2);
            expect(greater.inclusive).toBeFalse();

        });
    });
});
