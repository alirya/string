import Trim from "../dist/trim";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("trim", function() {


    it(`trim to abcde`, () => expect(Trim.Parameters('[abcde]', '[]')).toBe('abcde'));
    it(`trim to [abcde]`, () => expect(Trim.Parameters('([abcde])', '()')).toBe('[abcde]'));
    it(`trim to ([abcde])`, () => expect(Trim.Parameters('([abcde])', '[]')).toBe('([abcde])'));
    it(`trim to abcde`, () => expect(Trim.Parameters('([abcde])', '[]()')).toBe('abcde'));
    it(`trim to abcde`, () => expect(Trim.Parameters('[ ( abcde ) ]', '[]() ')).toBe('abcde'));

});




