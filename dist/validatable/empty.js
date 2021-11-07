import EmptyParameter from "./empty-parameter";
import EmptyParameters from "./empty-parameters";
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
var Empty;
(function (Empty) {
    Empty.Parameter = EmptyParameter;
    Empty.Parameters = EmptyParameters;
})(Empty || (Empty = {}));
export default Empty;
//# sourceMappingURL=empty.js.map