import {trimEnd} from "lodash";
import Suffix from "./suffix/suffix";
import String from "./string/string";



export const TrimSuffixParameter : (string : string, suffix ?: string) => string = trimEnd;

namespace TrimSuffix {

    export const Parameter = TrimSuffixParameter;
    export const Object = TrimSuffixObject;
    export type Argument = TrimSuffixArgument;
}

export type TrimSuffixArgument = String & Partial<Suffix>;

export function TrimSuffixObject({value, suffix} : TrimSuffixArgument) {

    return TrimSuffixParameter(value, suffix)
}

export default TrimSuffix;
