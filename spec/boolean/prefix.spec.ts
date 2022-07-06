import {PrefixParameters} from '../../dist/boolean/prefix.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('prefix', ()=>{

    expect(PrefixParameters('abcdefghij', 'a')).toBe(true);
    expect(PrefixParameters('abcdefghij', 'abcde')).toBe(true);

});

it('suffix', ()=>{

    expect(PrefixParameters('abcdefghij', 'j')).toBe(false);
    expect(PrefixParameters('abcdefghij', 'fghij')).toBe(false);

});
