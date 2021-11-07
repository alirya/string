import Value from "@dikac/t-value/value";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumParameters from "./maximum-parameters";


export type MaximumArgument = MaximumNumber & Inclusive & {

    converter ?: (value:string)=>number,
    error ?: (argument: Value<string> & MaximumNumber & Inclusive)=>Error
    //error ?: (value:string, maximum:number, inclusive:boolean)=>Error
}

export default function MaximumParameter(
    value, {
        maximum,
        inclusive,
        converter,
        error
    } : MaximumArgument) : asserts value is string {
    //
    // let guard = (value : string, maximum : number, inclusive : boolean) => {
    //     return Guard(value, maximum, inclusive, converter);
    // }

    return MaximumParameters(
        value,
        maximum,
        inclusive,
        converter,
        error ? (value, maximum, inclusive) => error({value, maximum, inclusive}) : error
    )
}

