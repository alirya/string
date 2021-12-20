import Empty from "../../../dist/assert/string/empty-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Empty('', true, 'value')).toBe(
        'value is empty string.'
    );

});

it('true invalid', ()=>{

    expect(Empty('123456789', true, 'value')).toBe(
        'value is empty string.'
    );

});

it('false valid', ()=>{

    expect(Empty('', false, 'value')).toBe(
        'value must empty string.'
    );

});

it('false invalid', ()=>{

    expect(Empty('123456789',false,  'value')).toBe(
        'value must empty string, actual "12345...".'
    );

});
