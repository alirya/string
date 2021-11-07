import Match from "../../../dist/assert/string/match";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Match.Parameters( 'abcd', true, /^[a-zA-Z]*$/,'value')).toBe(
        'value "abcd" match against ^[a-zA-Z]*$.'
    );

});

it('true invalid', ()=>{

    expect(Match.Parameters( '123456789', true, /^[a-zA-Z]*$/,'value')).toBe(
        'value "12345..." match against ^[a-zA-Z]*$.'
    );

});

it('false valid', ()=>{

    expect(Match.Parameters( 'abcded', false, /^[a-zA-Z]*$/,'value')).toBe(
        'value "abcded" does not match against ^[a-zA-Z]*$.'
    );

});

it('false invalid', ()=>{

    expect(Match.Parameters( '123456789', false, /^[a-zA-Z]*$/,'value')).toBe(
        'value "12345..." does not match against ^[a-zA-Z]*$.'
    );

});
