import {NotEmptyParameters} from '../../../dist/assert/string/not-empty.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(NotEmptyParameters('123456789',true,  'value')).toBe(
        'value is not empty string.'
    );

});

it('true invalid', ()=>{

    expect(NotEmptyParameters('', true, 'value')).toBe(
        'value is not empty string.'
    );

});

it('false valid', ()=>{

    expect(NotEmptyParameters('123456789',false,  'value')).toBe(
        'value must not empty string.'
    );

});

it('false invalid', ()=>{

    expect(NotEmptyParameters('', false, 'value')).toBe(
        'value must not empty string.'
    );

});
