import Guard from "../boolean/minimum";
import Callback from "@dikac/t-function/assert/callback-parameters";
import MinimumError from "./throwable/minimum";
import Count from "../number/count";


export default function MinimumParameters(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, minimum:number, inclusive:boolean)=>Error = MinimumError.Parameters
) : asserts value is string {

    let guard = (value : string, minimum : number, inclusive : boolean) => {
        return Guard.Parameters(value, minimum, inclusive, converter);
    }

    Callback(value, guard, error, minimum, inclusive);
}

