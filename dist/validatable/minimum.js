import MinimumParameter from "./minimum-parameter";
import MinimumParameters from "./minimum-parameters";
//
// export default class Minimum<ValueType extends string, MessageType>
//     implements
//         Readonly<Inclusive & MinimumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         readonly minimum : number,
//         readonly inclusive : boolean,
//         message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
//         readonly converter : (string:ValueType)=>number = Count,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = MinimumObject(this);
//     }
//
//     valueOf() : string {
//
//         return this.value;
//     }
//
//     toString() : string {
//
//         return this.value;
//     }
//
//     get message() : MessageType {
//
//         return this.messageFactory(this);
//     }
// }
var Minimum;
(function (Minimum) {
    Minimum.Parameter = MinimumParameter;
    Minimum.Parameters = MinimumParameters;
})(Minimum || (Minimum = {}));
export default Minimum;
//
// export type MinimumType<ValueType, MessageType> = Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>;
//
//
// export function MinimumParameter<ValueType extends string, MessageType>(
//     value : ValueType,
//     minimum : number,
//     inclusive : boolean,
//     // message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
//     message : (result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
//     converter : (string:ValueType)=>number = Count,
// ) : MinimumType<ValueType, MessageType> {
//
//     return Callback.Function.Parameter({value, minimum, inclusive, converter}, IsMinimum, message) as Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>
// }
//
// export type MinimumArgument<ValueType extends string, MessageType> =
//     Value<ValueType> &
//     MinimumNumber &
//     Inclusive &
//     {converter ?: (value:ValueType)=>number} &
//     Message<(result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType>
//
// export function MinimumObject<ValueType extends string, MessageType>(
//     // {
//     //     value,
//     //     minimum,
//     //     inclusive,
//     //     message,
//     //     converter
//     // }
//     value: MinimumArgument<ValueType, MessageType>
// ) : MinimumType<ValueType, MessageType> {
//
//     return Callback.Function.Object({
//         value:value as Omit<MinimumArgument<ValueType, MessageType>, 'message'>,
//         validation:IsMinimum,
//         message:value.message
//     }) as Readonly<Inclusive & MinimumNumber &  Value<ValueType> & Message<MessageType> & Validatable>
//
// }
//# sourceMappingURL=minimum.js.map