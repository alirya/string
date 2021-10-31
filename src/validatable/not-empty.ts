import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyBoolean from "./boolean/not-empty";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Callback from "@dikac/t-validator/validatable/callback";
import NumericFromObject from "../boolean/numeric";
//
// export default class NotEmpty<ValueType extends string, MessageType>
//     implements
//         Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
//
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType
//
//     constructor(
//         readonly value : ValueType,
//         message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
//     ) {
//
//         this.valid = NotEmptyBoolean(this);
//         this.messageFactory = message;
//
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

export default NotEmpty;
namespace NotEmpty {

    export const Parameter = NotEmptyParameter;
    export const Object = NotEmptyObject;
    export type Argument<ValueType extends string, MessageType> = NotEmptyArgument<ValueType, MessageType>;
}

export function NotEmptyParameter<ValueType extends string, MessageType>(
    value : ValueType,
    message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback(value, NotEmptyBoolean, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}

export type NotEmptyArgument<
    ValueType extends string,
    MessageType
    > = Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType>

export function NotEmptyObject<ValueType extends string, MessageType>({
      value,
      message
  } : NotEmptyArgument<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return NotEmptyParameter(value, message);
}

