import CircumfixParameters from '../../dist/circumfix-parameters';
import CircumfixParameter from '../../dist/circumfix-parameter';
import PadPrefixParameters from '../../dist/pad-prefix-parameters';
import PadSuffixParameters from '../../dist/pad-suffix-parameters';
import Affix from '../../dist/affix/affix';
import PrefixParameters from '../../dist/prefix-parameters';
import SuffixParameters from '../../dist/suffix-parameters';
import PrefixParameter from '../../dist/prefix-parameter';
import SuffixParameter from '../../dist/suffix-parameter';
import Prefix from '../../dist/prefix/prefix';
import Suffix from '../../dist/suffix/suffix';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('circumfix', function () {

    const results = CircumfixParameters('data', PrefixParameters, SuffixParameters, Affix.CIRCUMFIX, ['|']);

    const result = CircumfixParameter<Prefix & Suffix>({
        string : 'data',
        prefix : '|',
        affix : Affix.CIRCUMFIX,
        suffix : '|',
        callback : {
            prefix : PrefixParameter,
            suffix : SuffixParameter,
        },
    });

    expect(result).toBe(results);
});

it('prefix', function () {

    const results = CircumfixParameters('data', PrefixParameters, SuffixParameters, Affix.PREFIX, ['|']);

    const result = CircumfixParameter<Prefix & Suffix>({
        string : 'data',
        prefix : '|',
        affix : Affix.PREFIX,
        suffix : '|',
        callback : {
            prefix : PrefixParameter,
            suffix : SuffixParameter,
        },
    });

    expect(results).toBe(result);
});

it('suffix', function () {

    const results = CircumfixParameters('data', PrefixParameters, SuffixParameters, Affix.SUFFIX, ['|']);

    const result = CircumfixParameter<Prefix & Suffix>({
        string : 'data',
        prefix : '|',
        affix : Affix.SUFFIX,
        suffix : '|',
        callback : {
            prefix : PrefixParameter,
            suffix : SuffixParameter,
        },
    });

    expect(results).toBe(result);
});
