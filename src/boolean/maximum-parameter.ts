import MaximumNumber from "@dikac/t-number/maximum/maximum"
import Count from "../number/count";
import Value from "@dikac/t-value/value";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumParameters from "./maximum-parameters";


/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function MaximumParameter({
    value,
    maximum,
    inclusive,
    converter = Count
} : Value<string> & MaximumNumber & Partial<Inclusive & {converter : (value:string)=>number}>) : boolean {

    return MaximumParameters(value, maximum, inclusive, converter)
}


