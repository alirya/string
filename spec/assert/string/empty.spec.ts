import {EmptyParameters} from '../../../dist/assert/string/empty';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(EmptyParameters('', true, 'value')).toBe(
        'value is empty string.'
    );

});

it('true invalid', ()=>{

    expect(EmptyParameters('123456789', true, 'value')).toBe(
        'value is empty string.'
    );

});

it('false valid', ()=>{

    expect(EmptyParameters('', false, 'value')).toBe(
        'value must empty string.'
    );

});

it('false invalid', ()=>{

    expect(EmptyParameters('123456789',false,  'value')).toBe(
        'value must empty string, actual "12345...".'
    );

});
