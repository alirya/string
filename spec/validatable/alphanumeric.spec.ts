import ALPHABET from '../../dist/alphabet.js';
import DIGIT from '../../dist/digit.js';
import {AlphanumericParameters} from '../../dist/validatable/alphanumeric.js';
import AlphanumericMessage from '../../dist/assert/string/alphanumeric.js';
import AlphanumericMessageArgument from '../../dist/assert/string/alphanumeric.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, string]>();

it('add alphabet', ()=>{

    map.set(ALPHABET, [true, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [true, '1 alphabet']);
    }

});

it('add digit', ()=>{

    map.set(DIGIT, [true, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [true, '1 number']);
    }
});

it('add digit & alphabet', ()=>{

    map.set(ALPHABET + DIGIT, [true, 'mixed alphabet numeric']);
});


it('add unicode', ()=>{

    map.set('🕵🏻‍♀️', [false, 'emoji']);
    map.set('ℋ', [false, 'astral']);
});


it('add empty', ()=>{

    map.set('', [true, 'empty']);
    map.set(String.fromCodePoint(0), [false, 'ASCII NULL']);

});

for(let [value, [valid, message]] of map) {

    it(message, ()=>{

        let validatable = AlphanumericParameters(value, AlphanumericMessage.Parameters);
        expect(validatable.valid).toBe(valid);
        expect(validatable.value).toBe(value);


        expect(validatable.message).toBe(AlphanumericMessageArgument.Parameters(validatable.value, validatable.valid));
    });
}

