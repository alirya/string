import {CircumfixParameters} from '../../dist/circumfix.js';
import {CircumfixParameter} from '../../dist/circumfix.js';
import Affix from '../../dist/affix/affix.js';
import {PrefixParameters} from '../../dist/prefix.js';
import {SuffixParameters} from '../../dist/suffix.js';
import {PrefixParameter} from '../../dist/prefix.js';
import {SuffixParameter} from '../../dist/suffix.js';
import Prefix from '../../dist/prefix/prefix.js';
import Suffix from '../../dist/suffix/suffix.js';

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
