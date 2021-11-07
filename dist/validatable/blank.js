import BlankParameter from "./blank-parameter";
import BlankParameters from "./blank-parameters";
var Blank;
(function (Blank) {
    Blank.Parameter = BlankParameter;
    Blank.Parameters = BlankParameters;
})(Blank || (Blank = {}));
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
//# sourceMappingURL=blank.js.map