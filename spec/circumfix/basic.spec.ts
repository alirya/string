import CircumfixParameters from '../../dist/circumfix-parameters';
import PadPrefixParameters from '../../dist/pad-prefix-parameters';
import PadSuffixParameters from '../../dist/pad-suffix-parameters';
import Affix from '../../dist/affix/affix';
import PrefixParameters from '../../dist/prefix-parameters';
import SuffixParameters from '../../dist/suffix-parameters';

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
