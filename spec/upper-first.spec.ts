import UpperFirst from '../dist/upper-first.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('construct & getter', function() {

    const map = new Map<string, string>();
    map.set('abcde', 'Abcde');
    map.set('fghij', 'Fghij');
    map.set('abcde fghij', 'Abcde fghij');


    for(const [original, transformed] of map) {

        it(`uppercase firs ${original}`, () => expect(transformed).toBe(UpperFirst(original)));
    }

});




