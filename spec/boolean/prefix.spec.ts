import Prefix from "../../dist/boolean/prefix";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('prefix', ()=>{

    expect(Prefix.Parameters('abcdefghij', 'a')).toBe(true);
    expect(Prefix.Parameters('abcdefghij', 'abcde')).toBe(true);

});

it('suffix', ()=>{

    expect(Prefix.Parameters('abcdefghij', 'j')).toBe(false);
    expect(Prefix.Parameters('abcdefghij', 'fghij')).toBe(false);

});
