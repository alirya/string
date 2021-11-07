import MaximumType from "../string/maximum";
import Count from "../../number/count";

export default function MaximumParameters(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : Error {

    return new Error(MaximumType.Parameters(value, false, maximum, inclusive, converter, criteria, subject))
}
