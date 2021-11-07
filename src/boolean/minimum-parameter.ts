import Count from "../number/count";
import Value from "@dikac/t-value/value";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumParameters from "./minimum-parameters";

/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function MinimumParameter({
    value,
    minimum,
    inclusive,
    converter = Count
} : Value<string> & MinimumNumber & Inclusive & {converter : (value:string)=>number}) : boolean {

    return MinimumParameters(value, minimum, inclusive, converter);
}

