import Guard from "../boolean/minimum-parameters";
import Callback from "@alirya/function/assert/callback-parameters";
import MinimumError from "./throwable/minimum-parameters";
import Count from "../number/count";


export default function MinimumParameters(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, minimum:number, inclusive:boolean)=>Error = MinimumError
) : asserts value is string {

    let guard = (value : string, minimum : number, inclusive : boolean) => {
        return Guard(value, minimum, inclusive, converter);
    }

    Callback(value, guard, error, minimum, inclusive);
}

