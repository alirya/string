import ALPHABET from '../../dist/alphabet.js';
import DIGIT from '../../dist/digit.js';
import {NotEmptyParameters} from '../../dist/validator/not-empty.js';
import NotEmptyMessage from '../../dist/assert/string/not-empty.js';
import NotEmptyMessageArgument from '../../dist/assert/string/not-empty.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, string]>();

it('add alphabet', ()=>{

    map.set(ALPHABET, [false, 'all alphabet']);

    for (let letter of ALPHABET) {
        map.set(letter, [false, '1 alphabet']);
    }

});

it('add digit', ()=>{

    map.set(DIGIT, [false, 'all number']);

    for (let number of DIGIT) {

        map.set(number, [false, '1 number']);
    }
});

it('add digit & alphabet', ()=>{

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



    describe('not empty', () => {

        it(message, ()=>{

            let validator = NotEmptyParameters(NotEmptyMessage.Parameters);
            let validatable = validator(value);
            expect(validatable.valid).toBe(!valid);
            expect(validatable.value).toBe(value);

            expect(validatable.message).toBe(NotEmptyMessageArgument.Parameters(validatable.value, validatable.valid));
        });
    });

}

