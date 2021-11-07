import AlphanumericParameter, {AlphanumericArgument} from "./alphanumeric-parameter";
import AlphanumericParameters from "./alphanumeric-parameters";

//
// export default class Alphanumeric<ValueType extends string, MessageType>
//     implements
//         Readonly<Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
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
//         this.valid = AlphanumericFromObject(value);
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

namespace Alphanumeric {

    export const Parameter = AlphanumericParameter;
    export const Parameters = AlphanumericParameters;
    export type Argument<ValueType extends string, MessageType> = AlphanumericArgument<ValueType, MessageType>;
}

export default Alphanumeric;

