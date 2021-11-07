import BlankParameter, {BlankArgument} from "./blank-parameter";
import BlankParameters from "./blank-parameters";

namespace Blank {

    export const Parameter = BlankParameter;
    export const Parameters = BlankParameters;
    export type Argument<ValueType extends string, MessageType> = BlankArgument<ValueType, MessageType>;
}
export default Blank;
//
// export function BlankParameter<ValueType extends string, MessageType>(
//     value : ValueType,
//     message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
// ) {
//
//     return ValidatableCallbacks<string, ValueType, MessageType>(value, NotBlankBoolean, message);
// }
//
// export type BlankArgument<ValueType extends string, MessageType>
//     = Value<ValueType> &
//     Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;
//
// export function BlankObject<ValueType extends string, MessageType>({
//     value,
//     message
// } : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>) {
//
//     return BlankParameter(value, message);
// }

