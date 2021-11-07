import Value from "@dikac/t-value/value";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumParameters from "./minimum-parameters";


export type MinimumArgument = MinimumNumber & Inclusive & {

    converter ?: (value:string)=>number,
    error ?: (argument: Value<string> & MinimumNumber & Inclusive)=>Error
    //error ?: (value:string, minimum:number, inclusive:boolean)=>Error
}

export default function MinimumParameter(
    value, {
        minimum,
        inclusive,
        converter,
        error
    } : MinimumArgument) : asserts value is string {
    //
    // let guard = (value : string, minimum : number, inclusive : boolean) => {
    //     return Guard(value, minimum, inclusive, converter);
    // }

    return MinimumParameters(
        value,
        minimum,
        inclusive,
        converter,
        error ? (value, minimum, inclusive) => error({value, minimum, inclusive}) : error
    )
}


