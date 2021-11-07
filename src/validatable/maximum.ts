import MaximumParameter, {MaximumArgument, MaximumType} from "./maximum-parameter";
import MaximumParameters from "./maximum-parameters";


//
// export default class Maximum<ValueType extends string, MessageType>
//     implements
//         Readonly<Inclusive & MaximumNumber & Value<ValueType> & Message<MessageType> & Validatable>, ValueOf<string>
// {
//     readonly valid : boolean;
//     private messageFactory : (result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType;
//
//     constructor(
//         readonly value : ValueType,
//         readonly maximum : number,
//         readonly inclusive : boolean,
//         message : (result:Readonly<Value<ValueType> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
//         readonly converter : (string:ValueType)=>number = Count,
//     ) {
//
//         this.messageFactory = message;
//         this.valid = MaximumObject(this);
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


namespace Maximum {

    export const Parameter = MaximumParameter;
    export const Parameters = MaximumParameters;
    export type Argument<ValueType extends string, MessageType> = MaximumArgument<ValueType, MessageType>;
    export type Type<ValueType, MessageType> = MaximumType<ValueType, MessageType>;
}

export default Maximum;
