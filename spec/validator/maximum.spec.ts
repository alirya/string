import Maximum from "../../dist/validator/maximum-parameters";
import MaximumString from "../../dist/assert/string/maximum-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let validator = Maximum(1, false, MaximumString);
    let greater = validator('ab');

    it('set valid', ()=>{

        try {
            // @ts-expecerror
            greater.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expecerror
            greater.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expecerror
            greater.maximum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expecerror
            greater.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Maximum(1, true, MaximumString);
        let greater = validator('a');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeTrue();
        })
    });

    describe(`exclusive`,function() {

        let validator = Maximum(1, false, MaximumString);
        let greater = validator('a');
        greater
        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        })
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Maximum(1, true, MaximumString);
        let greater = validator('ab');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('ab');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Maximum(1, false, MaximumString);
        let greater = validator('ab');

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe('ab');
            expect(greater.maximum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        })
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let validator = Maximum<string>(2, true, MaximumString);
        let greater = validator('a');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(2);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let validator = Maximum<string>(2, false, MaximumString);
        let greater = validator('a');

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe('a');
            expect(greater.maximum).toBe(2);
            expect(greater.inclusive).toBeFalse();

        })
    });
});
