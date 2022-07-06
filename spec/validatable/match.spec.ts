import {MatchParameters} from '../../dist/validatable/match.js';
import ALPHABET from '../../dist/alphabet.js';
import DIGIT from '../../dist/digit.js';
import MatchMessage from '../../dist/assert/string/match.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, RegExp, string]>();

map.set(ALPHABET, [true, /[a-z]/i, 'standard']);
map.set(ALPHABET + DIGIT + ALPHABET, [true, /[a-z]/ig, 'global']);

for(let [value, [valid, regex, message]] of map) {

    it(message, ()=>{

        let valdiatable = new MatchParameters(value, regex, MatchMessage.Parameters);
        expect(valdiatable.valid).toBe(valid);
    });
}
