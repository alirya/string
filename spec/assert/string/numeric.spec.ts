import {NumericParameters} from '../../../dist/assert/string/numeric.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(NumericParameters( '0123456789', true, 'value')).toBe(
        'value is numeric.'
    );

});

it('true invalid', ()=>{

    expect(NumericParameters( '0123456789', true, 'value')).toBe(
        'value is numeric.'
    );

});

it('false valid', ()=>{

    expect(NumericParameters( '0123456789', false, 'value')).toBe(
        'value must numeric.'
    );

});

it('false invalid', ()=>{

    expect(NumericParameters( '0123ABCD456E789', false, 'value')).toBe(
        'value must numeric, contain "ABCD".'
    );

});
