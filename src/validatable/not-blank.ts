import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NotBlankBoolean from "../boolean/not-blank";
import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import Message from "@dikac/t-message/message";
import Callback from "@dikac/t-validator/validatable/callback";
import NotEmptyBoolean from "./boolean/not-empty";


export default NotBlank;
namespace NotBlank {

    export const Parameter = NotBlankParameter;
    export const Object = NotBlankObject;
    export type Argument<ValueType extends string, MessageType> = NotBlankArgument<ValueType, MessageType>;
}


export function NotBlankParameter<ValueType extends string, MessageType>(
    value : ValueType,
    message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType,
) {

    return Callback(value, NotBlankBoolean, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;

}

export type NotBlankArgument<
    ValueType extends string,
    MessageType
    > = Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType>

export function NotBlankObject<ValueType extends string, MessageType>({
        value,
        message
    } : NotBlankArgument<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return NotBlankParameter(value, message);
}
