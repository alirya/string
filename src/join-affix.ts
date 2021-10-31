import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Separator from "./separator/separator";
import {Object} from "ts-toolbelt";
import SafeCast from "./safe-cast";
import Value from "@dikac/t-value/value";

namespace JoinAffix {

    export const Parameter = JoinAffixParameter;
    export const Object = JoinAffixObject;
    export type Argument = JoinAffixArgument;
}


export function JoinAffixParameter(
    value : string[],
    separator : string,
    prefix ?: string,
    suffix ?: string,
) : string {

    return SafeCast(prefix) + value.join(separator) + SafeCast(suffix);
}

export type JoinAffixArgument = Partial<Prefix & Suffix> & Separator & Value<string[]>;


export function JoinAffixObject({
        value,
        separator,
        prefix,
        suffix,
    } : JoinAffixArgument) {

    return JoinAffixParameter(value, separator, prefix, suffix);
}

export default JoinAffix;
