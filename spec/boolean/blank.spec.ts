import Blank from '../../dist/boolean/blank.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('blank', ()=>{

    expect(Blank(' ')).toBe(true);
    expect(Blank('  ')).toBe(true);
    expect(Blank('\n')).toBe(true);
    expect(Blank('\t')).toBe(true);

});

it('not blank', ()=>{

    expect(Blank(' . ')).toBe(false);

});
