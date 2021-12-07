import Value from "@dikac/t-value/value";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumParameters from "./maximum-parameters";


export type MaximumArgument = MaximumNumber & Inclusive & {

    converter ?: (value:string)=>number,
    error ?: (argument: Value<string> & MaximumNumber & Inclusive)=>Error
}

export default function MaximumParameter(
    value, {
        maximum,
        inclusive,
        converter,
        error
    } : MaximumArgument) : asserts value is string {

    return MaximumParameters(
        value,
        maximum,
        inclusive,
        converter,
        error ? (value, maximum, inclusive) => error({value, maximum, inclusive}) : error
    )
}

