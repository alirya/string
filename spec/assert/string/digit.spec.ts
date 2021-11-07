import Digit from "../../../dist/assert/string/digit";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Digit.Parameters( '0123456789', true, 'value')).toBe(
        'value is digit.'
    );

});

it('true invalid', ()=>{

    expect(Digit.Parameters( '0123456789', true, 'value')).toBe(
        'value is digit.'
    );

});

it('false valid', ()=>{

    expect(Digit.Parameters( '0123456789', false, 'value')).toBe(
        'value must digit.'
    );

});

it('false invalid', ()=>{

    expect(Digit.Parameters( '0123ABCD456E789', false, 'value')).toBe(
        'value must digit, contains "ABCD".'
    );

});
