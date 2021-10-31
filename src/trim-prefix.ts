import {trimStart} from "lodash";
import Prefix from "./prefix/prefix";
import String from "./string/string";

export const TrimPrefixParameter : (string : string, prefix ?: string) => string = trimStart;

namespace TrimPrefix {

    export const Parameter = TrimPrefixParameter;
    export const Object = TrimPrefixObject;
    export type Argument = TrimPrefixArgument;
}

export type TrimPrefixArgument = String & Partial<Prefix>;

export function TrimPrefixObject({value, prefix} : TrimPrefixArgument) {

    return TrimPrefixParameter(value, prefix)
}

export default TrimPrefix;
