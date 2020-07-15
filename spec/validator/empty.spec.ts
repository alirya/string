import ALPHABET from "../../dist/alphabet";
import DIGIT from "../../dist/digit";
import Empty from "../../dist/validator/empty";
import EmptyMessage from "../../dist/validatable/string/empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<string, [boolean, string]>();

describe('add alphabet', ()=>{

    map.set(ALPHABET, [false, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [false, '1 alphabet']);
    }

});

describe('add digit', ()=>{

    map.set(DIGIT, [false, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [false, '1 number']);
    }
});

describe('add digit & alphabet', ()=>{

    map.set(ALPHABET + DIGIT, [false, 'mixed alphabet numeric']);
});


describe('add unicode', ()=>{

    map.set('🕵🏻‍♀️', [false, 'emoji']);
    map.set('ℋ', [false, 'astral']);
});


describe('add empty', ()=>{

    map.set('', [true, 'empty']);
    map.set(String.fromCodePoint(0), [false, 'ASCII NULL']);

});

for(let [value, [valid, message]] of map) {

    describe('empty', () => {

        it(message, ()=>{

            let validator = new Empty(true, EmptyMessage);
            let validatable = validator.validate(value);
            expect(validatable.valid).toBe(valid);
            expect(validatable.value).toBe(value);

            if(validatable.valid) {
                expect(validatable.message).toBe('string is empty');
            } else {
                expect(validatable.message).toBe('string is not empty');
            }
        });

    });

    describe('not empty', () => {

        it(message, ()=>{

            let validator = new Empty(false, EmptyMessage);
            let validatable = validator.validate(value);
            expect(validatable.valid).toBe(!valid);
            expect(validatable.value).toBe(value);

            if(validatable.valid) {
                expect(validatable.message).toBe('string is empty');
            } else {
                expect(validatable.message).toBe('string is not empty');
            }
        });
    });

}

