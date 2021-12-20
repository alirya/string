import Match from "../../dist/validator/match-parameters";
import ALPHABET from "../../dist/alphabet";
import DIGIT from "../../dist/digit";
import MatchMessage from "../../dist/assert/string/match-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, RegExp, string]>();

map.set(ALPHABET, [true, /[a-z]/i, 'standard']);
map.set(ALPHABET + DIGIT + ALPHABET, [true, /[a-z]/ig, 'global']);

for(let [value, [valid, regex, message]] of map) {

    it(message, ()=>{

        let validator = Match(regex, MatchMessage)
        let valdiatable = validator(value)
        expect(valdiatable.valid).toBe(valid);
    });
}
