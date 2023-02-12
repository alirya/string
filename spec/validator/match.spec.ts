import {MatchParameters} from '../../dist/validator/match.js';
import ALPHABET from '../../dist/alphabet.js';
import DIGIT from '../../dist/digit.js';
import MatchMessage from '../../dist/assert/string/match.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const map = new Map<string, [boolean, RegExp, string]>();

map.set(ALPHABET, [true, /[a-z]/i, 'standard']);
map.set(ALPHABET + DIGIT + ALPHABET, [true, /[a-z]/ig, 'global']);

for(const [value, [valid, regex, message]] of map) {

    it(message, ()=>{

        const validator = MatchParameters(regex, MatchMessage.Parameters);
        const valdiatable = validator(value);
        expect(valdiatable.valid).toBe(valid);
    });
}
