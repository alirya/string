import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyParameters from "./empty-parameters";
import MessageStatic from "@dikac/t-validator/message/function/static-parameter";
import Static from "@dikac/t-validator/validatable/static";

//
// export default class Empty<ValueType extends string, MessageType>
//     implements
//         Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
//
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = EmptyBoolean(this);
//     }
//
//     toString() : string {
//
//         return this.value;
//     }
//
//     valueOf() : string {
//
//         return this.value;
//     }
//
//     get message() : MessageType {
//
//         return this.messageFactory(this);
//     }
// }
//
// export default Empty;
// namespace Empty {
//
//     export const Parameter = EmptyParameter;
//     export const Object = EmptyObject;
//     export type Argument<ValueType extends string, MessageType> = EmptyArgument<ValueType, MessageType>;
// }
//
//
//
// export function EmptyParameter<ValueType extends string, MessageType>(
//     value : ValueType,
//     message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
// ) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {
//
//     return Callback(value, IsEmpty, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
// }
//
export type EmptyArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    Message<MessageStatic<'', ValueType, false, true, MessageType>>;

export default function EmptyParameter<ValueType extends string, MessageType>({
        value,
        message,
    } : EmptyArgument<ValueType, MessageType>
) : Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>> {

    return EmptyParameters(
        value,
        (value, valid) => message({value, valid})
    );
}


