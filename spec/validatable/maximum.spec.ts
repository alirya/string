import {MaximumParameters} from '../../dist/validatable/maximum.js';
import MaximumString from '../../dist/assert/string/maximum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    const greater = MaximumParameters<string, string>('ab', 1, false, MaximumString.Parameters);

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
            greater.maximum = 3;

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

        const greater = MaximumParameters<string, string>('a', 1, true, MaximumString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const greater = MaximumParameters<string, string>('a', 1, false, MaximumString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        });
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        const greater = MaximumParameters<string, string>('ab', 1, true, MaximumString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('ab');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const greater = MaximumParameters<string, string>('ab', 1, false, MaximumString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('ab');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        });
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        const greater = MaximumParameters<string, string>('a', 2, true, MaximumString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(2);
            expect(greater.inclusive).toBeTrue();

        });
    });

    describe(`exclusive`,function() {

        const greater = MaximumParameters<string, string>('a', 2, false, MaximumString.Parameters);

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(2);
            expect(greater.inclusive).toBeFalse();

        });
    });
});
