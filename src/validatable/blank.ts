import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import NotBlankBoolean from "../boolean/not-blank";
import Message from "@dikac/t-message/message";

export default Blank;
namespace Blank {

    export const Parameter = BlankParameter;
    export const Object = BlankObject;
    export type Argument<ValueType extends string, MessageType> = BlankArgument<ValueType, MessageType>;
}


export function BlankParameter<ValueType extends string, MessageType>(
    value : ValueType,
    message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
) {

    return ValidatableCallbacks<string, ValueType, MessageType>(value, NotBlankBoolean, message);
}

export type BlankArgument<ValueType extends string, MessageType>
    = Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export function BlankObject<ValueType extends string, MessageType>({
    value,
    message
} : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>) {

    return BlankParameter(value, message);
}

