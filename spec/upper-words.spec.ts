import UpperWords from "../dist/upper-words-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("construct & getter", function() {


    let map : [string, string, RegExp|string][] = [
        ['abcde', 'Abcde', ' '],
        ['fghij', 'Fghij', ' '],
        ['abcde fghij', 'Abcde Fghij', ' '],
        ['abcde fghij+klmno', 'Abcde Fghij+klmno', ' '],
        ['abcde fghij+klmno', 'Abcde Fghij+Klmno', /[ +]/g],
    ];

    for(let [index, [original, transformed, delimiters]] of map.entries()) {

        it(`[${index}] ${original}`, () => expect(transformed).toBe(UpperWords(original, delimiters)));
    }

});


