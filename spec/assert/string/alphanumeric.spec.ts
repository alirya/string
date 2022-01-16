import Alphanumeric from '../../../dist/assert/string/alphanumeric-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Alphanumeric('abcd12345', true, 'value')).toBe(
        'value is alphanumeric.'
    );

});

it('true invalid', ()=>{

    expect(Alphanumeric('!@#$%^&*()_+', true, 'value')).toBe(
        'value is alphanumeric.'
    );

});

it('false valid', ()=>{

    expect(Alphanumeric('123ABC', false, 'value')).toBe(
        'value must alphanumeric.'
    );

});

it('false invalid', ()=>{

    expect(Alphanumeric('12!@#$%^&*()_+AB', false, 'value')).toBe(
        'value must alphanumeric, contains "!@#$%".'
    );

});
