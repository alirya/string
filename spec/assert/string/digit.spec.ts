import Digit from '../../../dist/assert/string/digit-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Digit( '0123456789', true, 'value')).toBe(
        'value is digit.'
    );

});

it('true invalid', ()=>{

    expect(Digit( '0123456789', true, 'value')).toBe(
        'value is digit.'
    );

});

it('false valid', ()=>{

    expect(Digit( '0123456789', false, 'value')).toBe(
        'value must digit.'
    );

});

it('false invalid', ()=>{

    expect(Digit( '0123ABCD456E789', false, 'value')).toBe(
        'value must digit, contains "ABCD".'
    );

});
