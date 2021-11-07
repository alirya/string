import Match from "../../dist/validatable/match";
import ALPHABET from "../../dist/alphabet";
import DIGIT from "../../dist/digit";
import MatchMessage from "../../dist/assert/string/match";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let map = new Map<string, [boolean, RegExp, string]>();

map.set(ALPHABET, [true, /[a-z]/i, 'standard']);
map.set(ALPHABET + DIGIT + ALPHABET, [true, /[a-z]/ig, 'global']);

for(let [value, [valid, regex, message]] of map) {

    it(message, ()=>{

        let valdiatable = new Match.Parameters(value, regex, MatchMessage.Parameters)
        expect(valdiatable.valid).toBe(valid);
    });
}
