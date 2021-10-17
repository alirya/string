import Minimum from "../../dist/validator/minimum";
import MinimumString from "../../dist/validatable/string/minimum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let validator = Minimum(1, false, MinimumString);
    let greater = validator('ab');

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

        let validator = Minimum(1, true, MinimumString);
        let greater = validator('1');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('1');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Minimum(1, false, MinimumString);
        let greater = validator('1');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('1');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        })
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Minimum<string>(1, true, MinimumString);
        let greater = validator('ab');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('ab');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Minimum<string>(1, false, MinimumString);
        let greater = validator('ab');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('ab');
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        })
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Minimum(2, true, MinimumString);
        let greater = validator('a');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('a');
            expect(greater.minimum).toBe(2);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Minimum(2, false, MinimumString);
        let greater = validator('a');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('a');
            expect(greater.minimum).toBe(2);
            expect(greater.inclusive).toBeFalse();

        })
    });
});
