import Prefix from './prefix/prefix';
import Suffix from './suffix/suffix';
import Separator from './separator/separator';
import Value from '@alirya/value/value';
import JoinAffixParameters from './join-affix-parameters';

export type JoinAffixArgument = Partial<Prefix & Suffix> & Separator & Value<string[]>;

export default function JoinAffixParameter({
        value,
        separator,
        prefix,
        suffix,
    } : JoinAffixArgument) {

    return JoinAffixParameters(value, separator, prefix, suffix);
}


