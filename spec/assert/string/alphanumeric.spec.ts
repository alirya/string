import Alphanumeric from "../../../dist/assert/string/alphanumeric";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Alphanumeric.Parameters('abcd12345', true, 'value')).toBe(
        'value is alphanumeric.'
    );

});

it('true invalid', ()=>{

    expect(Alphanumeric.Parameters('!@#$%^&*()_+', true, 'value')).toBe(
        'value is alphanumeric.'
    );

});

it('false valid', ()=>{

    expect(Alphanumeric.Parameters('123ABC', false, 'value')).toBe(
        'value must alphanumeric.'
    );

});

it('false invalid', ()=>{

    expect(Alphanumeric.Parameters('12!@#$%^&*()_+AB', false, 'value')).toBe(
        'value must alphanumeric, contains "!@#$%".'
    );

});
