import Suffix from "./suffix/suffix";
import Value from "@dikac/t-value/value";
import SuffixParameters from "./suffix-parameters";

export type SuffixArgument = Value<string> & Partial<Suffix>;

/**
 * append {@param suffix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param suffix
 */


export default function SuffixParameter({value, suffix} : SuffixArgument) : string {

    return SuffixParameters(value, suffix);
}


