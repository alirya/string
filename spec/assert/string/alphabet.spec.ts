import Alphabet from '../../../dist/assert/string/alphabet-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Alphabet('abcd', true, 'value')).toBe(
        'value is alphabet.'
    );

});

it('true invalid', ()=>{

    expect(Alphabet('123456789', true, 'value')).toBe(
        'value is alphabet.'
    );

});

it('false valid', ()=>{

    expect(Alphabet('abcded', false, 'value')).toBe(
        'value must alphabet.'
    );

});

it('false invalid', ()=>{

    expect(Alphabet('123456789', false, 'value')).toBe(
        'value must alphabet, contains "12345".'
    );

});
