import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import NotBlankBoolean from "../boolean/not-blank";
import Dynamic from "@dikac/t-validator/message/function/validatable";


export default function BlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic.Parameters<ValueType, MessageType>,
) {

    return ValidatableCallbacks.Function.Parameters<string, ValueType, MessageType>(value, NotBlankBoolean, message);
}
