import NotEmpty from '../../../dist/assert/string/not-empty-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(NotEmpty('123456789',true,  'value')).toBe(
        'value is not empty string.'
    );

});

it('true invalid', ()=>{

    expect(NotEmpty('', true, 'value')).toBe(
        'value is not empty string.'
    );

});

it('false valid', ()=>{

    expect(NotEmpty('123456789',false,  'value')).toBe(
        'value must not empty string.'
    );

});

it('false invalid', ()=>{

    expect(NotEmpty('', false, 'value')).toBe(
        'value must not empty string.'
    );

});
