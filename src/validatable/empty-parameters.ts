import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import IsEmpty from "../boolean/empty";
import MessageStatic from "@dikac/t-validator/message/function/static-parameters";
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

// export default Empty;
// namespace Empty {
//
//     export const Parameter = EmptyParameter;
//     export const Object = EmptyObject;
//     export type Argument<ValueType extends string, MessageType> = EmptyArgument<ValueType, MessageType>;
// }
//


export default function EmptyParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageStatic<'', ValueType, false, true, MessageType>,
) : Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>> {

    return Callback(value, IsEmpty, message) as
        Readonly<Static<'', ValueType, false, true, Value<string> & Message<MessageType> & Validatable>>;
}

// export type EmptyArgument<ValueType extends string, MessageType> = Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;
//
// export function EmptyObject<ValueType extends string, MessageType>({
//         value,
//         message,
//     } : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>
// ) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {
//
//     return EmptyParameter(value, message);
// }
//

