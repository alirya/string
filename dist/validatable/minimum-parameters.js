import IsMinimum from "../boolean/minimum";
import Count from "../number/count";
import Callback from "@dikac/t-validator/validatable/callback";
export default function MinimumParameters(value, minimum, inclusive, 
// message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
message, converter = Count) {
    return Object.assign(Callback.Function.Parameters(value, IsMinimum.Parameters, message, [minimum, inclusive, converter]), { minimum, inclusive });
}
//# sourceMappingURL=minimum-parameters.js.map