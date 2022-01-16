import Match from '../../dist/boolean/match-parameters';
import ALPHABET from '../../dist/alphabet';
import DIGIT from '../../dist/digit';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, RegExp, string]>();

map.set(ALPHABET, [true, /[a-z]/i, 'standard']);
map.set(ALPHABET + DIGIT + ALPHABET, [true, /[a-z]/ig, 'global']);

for(let [value, [valid, regex, message]] of map) {

    it(message, ()=>{
        expect(Match(value, regex)).toBe(valid);
    });
}
