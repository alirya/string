import SafeCast from './safe-cast.js';
import Prefix from './prefix/prefix.js';
import Suffix from './suffix/suffix.js';
import Separator from './separator/separator.js';
import Value from '@axiona/value/value.js';

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
