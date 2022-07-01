import {MatchParameters} from '../../dist/boolean/match';
import ALPHABET from '../../dist/alphabet';
import DIGIT from '../../dist/digit';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, RegExp, string]>();

map.set(ALPHABET, [true, /[a-z]/i, 'standard']);
map.set(ALPHABET + DIGIT + ALPHABET, [true, /[a-z]/ig, 'global']);

for(let [value, [valid, regex, message]] of map) {

    it(message, ()=>{
        expect(MatchParameters(value, regex)).toBe(valid);
    });
}
