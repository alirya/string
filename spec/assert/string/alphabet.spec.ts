import {AlphabetParameters} from '../../../dist/assert/string/alphabet';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(AlphabetParameters('abcd', true, 'value')).toBe(
        'value is alphabet.'
    );

});

it('true invalid', ()=>{

    expect(AlphabetParameters('123456789', true, 'value')).toBe(
        'value is alphabet.'
    );

});

it('false valid', ()=>{

    expect(AlphabetParameters('abcded', false, 'value')).toBe(
        'value must alphabet.'
    );

});

it('false invalid', ()=>{

    expect(AlphabetParameters('123456789', false, 'value')).toBe(
        'value must alphabet, contains "12345".'
    );

});
