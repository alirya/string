import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import FunctionStatic from "@dikac/t-validator/message/function/static";
import NotEmptyParameters, {NotEmptyType} from "./not-empty-parameters";
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

export type NotEmptyArgument<
    ValueType extends string,
    MessageType
    > = Message<FunctionStatic.Parameter<'', ValueType, false, true, MessageType>> & Value<ValueType>

export {NotEmptyType};

export default function NotEmptyParameter<ValueType extends string, MessageType>({
      value,
      message
  } : NotEmptyArgument<ValueType, MessageType>
) : NotEmptyType<ValueType, MessageType> {

    return NotEmptyParameters(value, (value, valid) => message({value, valid}));
}

