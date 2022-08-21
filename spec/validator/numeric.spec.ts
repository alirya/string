import ALPHABET from '../../dist/alphabet';
import DIGIT from '../../dist/digit';
import {NumericParameters} from '../../dist/validator/numeric';
import NumericMessageArgument from '../../dist/assert/string/numeric';
import NumericMessage from '../../dist/assert/string/numeric';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string|number, [boolean, string]>();

it('add alphabet', ()=>{

    map.set(ALPHABET, [false, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [false, '1 alphabet']);
    }

});

it('add numeric', ()=>{

    map.set(DIGIT, [true, 'all numeric']);

    for (let number of DIGIT) {

        map.set(number, [true, '1 numeric']);
    }
});

it('add number', ()=>{

    map.set(10000, [true, 'integer']);
    map.set(10.11, [true, 'float']);
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

for(let [value, [valid, message]] of map) {

    it(message, ()=>{

        let validator = NumericParameters(NumericMessage.Parameters);
        let validatable = validator(value);
        expect(validatable.valid).toBe(valid);
        expect(validatable.value).toBe(value);

        expect(validatable.message).toBe(NumericMessageArgument.Parameters(validatable.value, validatable.valid));
    });
}

