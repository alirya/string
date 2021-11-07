import Suffix from "../../dist/boolean/suffix";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('suffix', ()=>{

    expect(Suffix.Parameters('abcdefghij', 'fghij')).toBe(true);
    expect(Suffix.Parameters('abcdefghij', 'j')).toBe(true);

});

it('prefix', ()=>{

    expect(Suffix.Parameters('abcdefghij', 'abcde')).toBe(false);
    expect(Suffix.Parameters('abcdefghij', 'a')).toBe(false);

});
