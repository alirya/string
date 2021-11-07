import MaximumObject from "../boolean/maximum";
import Count from "../number/count";
import Callback from "@dikac/t-validator/validatable/callback";
export default function MaximumParameters(value, maximum, inclusive, message, //(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
converter = Count) {
    return Object.assign(Callback.Function.Parameters(value, MaximumObject.Parameters, message, [maximum, inclusive, converter]), { maximum, inclusive });
}
// export type MaximumArgument<ValueType extends string, MessageType> =
//
//     Value<ValueType> & MaximumNumber & Inclusive & {converter ?: (value:ValueType)=>number} & Message<(result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType>
//
// export function MaximumObject<ValueType extends string, MessageType>(
//     {
//         value,
//         maximum,
//         inclusive,
//         message,
//         converter
//     } : MaximumArgument<ValueType, MessageType>
// ) : MaximumType<ValueType, MessageType> {
//
//     return MaximumParameter(value, maximum, inclusive, message, converter);
// }
//# sourceMappingURL=maximum-parameters.js.map