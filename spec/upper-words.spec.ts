import {UpperWordsParameters} from '../dist/upper-words.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('construct & getter', function() {


    const map : [string, string, RegExp|string][] = [
        ['abcde', 'Abcde', ' '],
        ['fghij', 'Fghij', ' '],
        ['abcde fghij', 'Abcde Fghij', ' '],
        ['abcde fghij+klmno', 'Abcde Fghij+klmno', ' '],
        ['abcde fghij+klmno', 'Abcde Fghij+Klmno', /[ +]/g],
    ];

    for(const [index, [original, transformed, delimiters]] of map.entries()) {

        it(`[${index}] ${original}`, () => expect(transformed).toBe(UpperWordsParameters(original, delimiters)));
    }

});


