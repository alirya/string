import Suffix from "../../dist/boolean/suffix-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('suffix', ()=>{

    expect(Suffix('abcdefghij', 'fghij')).toBe(true);
    expect(Suffix('abcdefghij', 'j')).toBe(true);

});

it('prefix', ()=>{

    expect(Suffix('abcdefghij', 'abcde')).toBe(false);
    expect(Suffix('abcdefghij', 'a')).toBe(false);

});
