import {TrimParameters} from '../dist/trim';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('trim', function() {


    it(`trim to empty`, () => expect(TrimParameters(' \r\nabcde\r\n ')).toBe('abcde'));
    it(`trim to abcde`, () => expect(TrimParameters('[abcde]', '[]')).toBe('abcde'));
    it(`trim to [abcde]`, () => expect(TrimParameters('([abcde])', '()')).toBe('[abcde]'));
    it(`trim to ([abcde])`, () => expect(TrimParameters('([abcde])', '[]')).toBe('([abcde])'));
    it(`trim to abcde`, () => expect(TrimParameters('([abcde])', '[]()')).toBe('abcde'));
    it(`trim to abcde`, () => expect(TrimParameters('[ ( abcde ) ]', '[]() ')).toBe('abcde'));

});




