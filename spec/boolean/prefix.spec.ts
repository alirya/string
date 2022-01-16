import Prefix from '../../dist/boolean/prefix-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('prefix', ()=>{

    expect(Prefix('abcdefghij', 'a')).toBe(true);
    expect(Prefix('abcdefghij', 'abcde')).toBe(true);

});

it('suffix', ()=>{

    expect(Prefix('abcdefghij', 'j')).toBe(false);
    expect(Prefix('abcdefghij', 'fghij')).toBe(false);

});
