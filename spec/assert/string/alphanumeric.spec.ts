import {AlphanumericParameters} from '../../../dist/assert/string/alphanumeric';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(AlphanumericParameters('abcd12345', true, 'value')).toBe(
        'value is alphanumeric.'
    );

});

it('true invalid', ()=>{

    expect(AlphanumericParameters('!@#$%^&*()_+', true, 'value')).toBe(
        'value is alphanumeric.'
    );

});

it('false valid', ()=>{

    expect(AlphanumericParameters('123ABC', false, 'value')).toBe(
        'value must alphanumeric.'
    );

});

it('false invalid', ()=>{

    expect(AlphanumericParameters('12!@#$%^&*()_+AB', false, 'value')).toBe(
        'value must alphanumeric, contains "!@#$%".'
    );

});
