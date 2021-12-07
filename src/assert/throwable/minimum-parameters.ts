import MinimumType from "../string/minimum-parameters";
import Count from "../../number/count";

export default function MinimumParameters(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : Error {

    return new Error(MinimumType(value, false, minimum, inclusive, converter, criteria, subject))
}
