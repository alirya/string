import Numeric from "../../../dist/assert/string/numeric-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Numeric( '0123456789', true, 'value')).toBe(
        'value is numeric.'
    );

});

it('true invalid', ()=>{

    expect(Numeric( '0123456789', true, 'value')).toBe(
        'value is numeric.'
    );

});

it('false valid', ()=>{

    expect(Numeric( '0123456789', false, 'value')).toBe(
        'value must numeric.'
    );

});

it('false invalid', ()=>{

    expect(Numeric( '0123ABCD456E789', false, 'value')).toBe(
        'value must numeric, contain "ABCD".'
    );

});
