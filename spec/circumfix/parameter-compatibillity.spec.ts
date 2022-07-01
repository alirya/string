import {CircumfixParameters} from '../../dist/circumfix';
import {CircumfixParameter} from '../../dist/circumfix';
import Affix from '../../dist/affix/affix';
import {PrefixParameters} from '../../dist/prefix';
import {SuffixParameters} from '../../dist/suffix';
import {PrefixParameter} from '../../dist/prefix';
import {SuffixParameter} from '../../dist/suffix';
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
