import NotBlank from '../../dist/boolean/not-blank';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('blank', ()=>{

    expect(NotBlank(' ')).toBe(false);
    expect(NotBlank('  ')).toBe(false);
    expect(NotBlank('\n')).toBe(false);
    expect(NotBlank('\t')).toBe(false);

});

it('not blank', ()=>{

    expect(NotBlank(' . ')).toBe(true);

});
