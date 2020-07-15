import ALPHABET from "../../dist/alphabet";
import DIGIT from "../../dist/digit";
import Alphanumeric from "../../dist/validatable/alphanumeric";
import AlphanumericMessage from "../../dist/validatable/string/alphanumeric";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let map = new Map<string, [boolean, string]>();

describe('add alphabet', ()=>{

    map.set(ALPHABET, [true, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [true, '1 alphabet']);
    }

});

describe('add digit', ()=>{

    map.set(DIGIT, [true, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [true, '1 number']);
    }
});

describe('add digit & alphabet', ()=>{

    map.set(ALPHABET + DIGIT, [true, 'mixed alphabet numeric']);
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

    it(message, ()=>{

        let validatable = new Alphanumeric(value, AlphanumericMessage);
        expect(validatable.valid).toBe(valid);
        expect(validatable.value).toBe(value);

        if(validatable.valid) {
            expect(validatable.message).toBe('string is alphanumeric');
        } else {
            expect(validatable.message).toBe('string is not alphanumeric');
        }
    });
}

