import Trim from '../dist/trim-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('trim', function() {


    it(`trim to abcde`, () => expect(Trim('[abcde]', '[]')).toBe('abcde'));
    it(`trim to [abcde]`, () => expect(Trim('([abcde])', '()')).toBe('[abcde]'));
    it(`trim to ([abcde])`, () => expect(Trim('([abcde])', '[]')).toBe('([abcde])'));
    it(`trim to abcde`, () => expect(Trim('([abcde])', '[]()')).toBe('abcde'));
    it(`trim to abcde`, () => expect(Trim('[ ( abcde ) ]', '[]() ')).toBe('abcde'));

});




