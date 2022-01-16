import Guard from '../boolean/maximum-parameters';
import Callback from '@alirya/function/assert/callback-parameters';
import MaximumError from './throwable/maximum-parameters';
import Count from '../number/count';


export default function MaximumParameters(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, maximum:number, inclusive:boolean)=>Error = MaximumError
) : asserts value is string {

    let guard = (value : string, maximum : number, inclusive : boolean) => {
        return Guard(value, maximum, inclusive, converter);
    };

    Callback(value, guard, error, maximum, inclusive);
}
