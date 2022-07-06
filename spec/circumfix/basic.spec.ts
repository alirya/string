import {CircumfixParameters} from '../../dist/circumfix.js';
import Affix from '../../dist/affix/affix.js';
import {PrefixParameters} from '../../dist/prefix.js';
import {SuffixParameters} from '../../dist/suffix.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('circumfix', function () {

    const result = CircumfixParameters('data', PrefixParameters, SuffixParameters, Affix.CIRCUMFIX, ['|']);
    expect(result).toBe('|data|');
});

it('prefix', function () {

    const result = CircumfixParameters('data', PrefixParameters, SuffixParameters, Affix.PREFIX, ['|']);
    expect(result).toBe('|data');
});

it('suffix', function () {

    const result = CircumfixParameters('data', PrefixParameters, SuffixParameters, Affix.SUFFIX, ['|']);
    expect(result).toBe('data|');
});
