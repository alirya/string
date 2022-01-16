import Value from "@alirya/value/value";
import MinimumNumber from "@alirya/number/minimum/minimum";
import Inclusive from "@alirya/number/inclusive/inclusive";
import MinimumParameters from "./minimum-parameters";


export type MinimumArgument = MinimumNumber & Inclusive & {

    converter ?: (value:string)=>number,
    error ?: (argument: Value<string> & MinimumNumber & Inclusive)=>Error
}

export default function MinimumParameter(
    value, {
        minimum,
        inclusive,
        converter,
        error
    } : MinimumArgument) : asserts value is string {

    return MinimumParameters(
        value,
        minimum,
        inclusive,
        converter,
        error ? (value, minimum, inclusive) => error({value, minimum, inclusive}) : error
    )
}


