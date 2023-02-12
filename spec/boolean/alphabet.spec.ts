import Alphabet from '../../dist/boolean/alphabet.js';
import ALPHABET from '../../dist/alphabet.js';
import DIGIT from '../../dist/digit.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const map = new Map<string, [boolean, string]>();

it('add alphabet', ()=>{

    map.set(ALPHABET, [true, 'all alphabet']);

    for (const letter of ALPHABET) {
        map.set(letter, [true, '1 alphabet']);
    }

});

it('add digit', ()=>{

    map.set(DIGIT, [false, 'all number']);

    for (const number of DIGIT) {

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


for(const [value, [valid, message]] of map) {

    it(message, ()=>{
        expect(Alphabet(value)).toBe(valid);
    });
}
