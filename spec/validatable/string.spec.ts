import Validator from '../../dist/validatable/string';
import StringMessage from '../../dist/assert/string/string';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


describe(`compiler compatible`,function() {

    it(`valid value`,function() {

        let validatable = Validator.Parameters(<unknown>'10', StringMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            let string : string = validatable.value;
            expect(string).toBe('10');

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            fail('validatable.valid should false');
        }
    });

    it(`invalid value`,function() {

        let validatable = Validator.Parameters(<unknown>{}, StringMessage.Parameters);

        if(validatable.valid) {

            // compiler pass
            let string : string = validatable.value;
            fail('validatable.valid should false');

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            // @ts-expect-error
            expect(string).toEqual({});
        }
    });

    it(`readonly`,function() {

        let validatable = Validator.Parameters(<unknown>1, StringMessage.Parameters);

        try {
            // @ts-expect-error
            validatable.valid = true;
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        // @ts-expect-error
        validatable.value = true;

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

    let validatable = Validator.Parameters('1', StringMessage.Parameters);

    expect(validatable.valid).toBe(true);
    expect(validatable.value).toBe('1');
    expect(typeof validatable.message).toBe('string');

});

it(`invalid`,function() {

    let validatable = Validator.Parameters(11, StringMessage.Parameters);

    expect(validatable.valid).toBe(false);
    expect(validatable.value).toBe(11);
    expect(typeof validatable.message).toBe('string');

});



