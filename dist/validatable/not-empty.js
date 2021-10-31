import NotEmptyBoolean from "./boolean/not-empty";
import Callback from "@dikac/t-validator/validatable/callback";
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
var NotEmpty;
(function (NotEmpty) {
    NotEmpty.Parameter = NotEmptyParameter;
    NotEmpty.Object = NotEmptyObject;
})(NotEmpty || (NotEmpty = {}));
export function NotEmptyParameter(value, message) {
    return Callback(value, NotEmptyBoolean, message);
}
export function NotEmptyObject({ value, message }) {
    return NotEmptyParameter(value, message);
}
//# sourceMappingURL=not-empty.js.map