import {SuffixParameters} from '../../dist/boolean/suffix';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('suffix', ()=>{

    expect(SuffixParameters('abcdefghij', 'fghij')).toBe(true);
    expect(SuffixParameters('abcdefghij', 'j')).toBe(true);

});

it('prefix', ()=>{

    expect(SuffixParameters('abcdefghij', 'abcde')).toBe(false);
    expect(SuffixParameters('abcdefghij', 'a')).toBe(false);

});
