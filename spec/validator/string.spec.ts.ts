import Validator from "../../dist/validator/string";
import StringMessage from "../../dist/assert/string/string";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validator = Validator.Parameters(StringMessage.Parameters);
        let validatable = validator(<unknown>'10');

        if(validatable.valid) {

            // compiler pass
            let string : string = validatable.value;
            expect(string).toBe('10');

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            fail('validatable.valid should false')
        }
    });

    it(`invalid value`,function() {

        let validator = Validator.Parameters(StringMessage.Parameters);
        let validatable = validator({});

        if(validatable.valid) {

            // compiler pass
            let string : string = validatable.value;
            fail('validatable.valid should false')

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            // @ts-expect-error
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validator = Validator.Parameters(StringMessage.Parameters);
        let validatable = validator('1');

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.value = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            // @ts-expect-error
            validatable.message = 'message';
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


it(`valid`,function() {

    let validator = Validator.Parameters(StringMessage.Parameters);
    let validatable = validator('1');

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe('1');
    expect(typeof validatable.message).toBe("string");

});

it(`invalid`,function() {

    let validator = Validator.Parameters(StringMessage.Parameters);
    let validatable = validator(1);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(1);
    expect(typeof validatable.message).toBe("string");

});



