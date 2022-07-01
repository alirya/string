import SafeCast from './safe-cast';
import Prefix from './prefix/prefix';
import Suffix from './suffix/suffix';
import Separator from './separator/separator';
import Value from '@alirya/value/value';

export function JoinAffixParameters(
    value : string[],
    separator : string,
    prefix ?: string,
    suffix ?: string,
) : string {

    return SafeCast(prefix) + value.join(separator) + SafeCast(suffix);
}

export type JoinAffixArgument = Partial<Prefix & Suffix> & Separator & Value<string[]>;

export function JoinAffixParameter({
        value,
        separator,
        prefix,
        suffix,
    } : JoinAffixArgument) {

    return JoinAffixParameters(value, separator, prefix, suffix);
}

namespace JoinAffix {
    export const Parameters = JoinAffixParameters;
    export const Parameter = JoinAffixParameter;
    export type Argument = JoinAffixArgument;
}
export default JoinAffix;
