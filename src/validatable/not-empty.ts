import NotEmptyParameter, {NotEmptyArgument} from "./not-empty-parameter";
import NotEmptyParameters from "./not-empty-parameters";
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


namespace NotEmpty {

    export const Parameter = NotEmptyParameter;
    export const Parameters = NotEmptyParameters;
    export type Argument<ValueType extends string, MessageType> = NotEmptyArgument<ValueType, MessageType>;
}

export default NotEmpty;
//
// export function NotEmptyParameter<ValueType extends string, MessageType>(
//     value : ValueType,
//     message : FunctionStatic.Parameter<string, '', ValueType, false, true, MessageType>
// ) : NotEmptyType<ValueType, MessageType>  {
//
//     return Callback.Function.Parameter(value, NotEmptyBoolean, message) as NotEmptyType<ValueType, MessageType>;
// }
//
// export type NotEmptyArgument<
//     ValueType extends string,
//     MessageType
//     > = Message<FunctionStatic.Object<string, '', ValueType, false, true, MessageType>> & Value<ValueType>
//
// export type NotEmptyType<ValueType extends string, MessageType>
//     = Static<string, '', string, false, true, Message<MessageType> & Validatable & Value<ValueType>>;
//
// export function NotEmptyObject<ValueType extends string, MessageType>({
//       value,
//       message
//   } : NotEmptyArgument<ValueType, MessageType>
// ) : NotEmptyType<ValueType, MessageType> {
//
//     return NotEmptyParameter(value, (value, valid) => message({value, valid}));
// }

