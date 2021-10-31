import Callback from "@dikac/t-validator/validatable/callback";
import IsEmpty from "../boolean/empty";
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
export default Empty;
var Empty;
(function (Empty) {
    Empty.Parameter = EmptyParameter;
    Empty.Object = EmptyObject;
})(Empty || (Empty = {}));
export function EmptyParameter(value, message) {
    return Callback(value, IsEmpty, message);
}
export function EmptyObject({ value, message, }) {
    return EmptyParameter(value, message);
}
//# sourceMappingURL=empty.js.map