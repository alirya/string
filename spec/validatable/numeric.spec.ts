import ALPHABET from '../../dist/alphabet.js';
import DIGIT from '../../dist/digit.js';
import {NumericParameters} from '../../dist/validatable/numeric.js';
import NumericMessage from '../../dist/assert/string/numeric.js';
import NumericMessageArgument from '../../dist/assert/string/numeric.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const map = new Map<string, [boolean, string]>();

it('add alphabet', ()=>{

    map.set(ALPHABET, [false, 'all alphabet']);

    for (const letter of ALPHABET) {
        map.set(letter, [false, '1 alphabet']);
    }

});

it('add numeric', ()=>{

    map.set(DIGIT, [true, 'all number']);

    for (const number of DIGIT) {

        map.set(number, [true, '1 number']);
    }
});

it('add numeric & alphabet', ()=>{

    map.set(ALPHABET + DIGIT, [false, 'mixed alphabet numeric']);
});


it('add unicode', ()=>{

    map.set('🕵🏻‍♀️', [false, 'emoji']);
    map.set('ℋ', [false, 'astral']);
});


it('add empty', ()=>{

    map.set('', [true, 'empty']);
    map.set(String.fromCodePoint(0), [false, 'ASCII NULL']);

});

for(const [value, [valid, message]] of map) {

    it(message, ()=>{

        const validatable = NumericParameters(value, NumericMessage.Parameters);
        expect(validatable.valid).toBe(valid);
        expect(validatable.value).toBe(value);

        expect(validatable.message).toBe(NumericMessageArgument.Parameters(validatable.value, validatable.valid));
    });
}

