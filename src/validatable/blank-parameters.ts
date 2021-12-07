import ValidatableCallbacks from "@dikac/t-validator/validatable/callback-function-parameters";
import NotBlankBoolean from "../boolean/not-blank";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";


export default function BlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic<ValueType, MessageType>,
) {

    return ValidatableCallbacks<string, ValueType, MessageType>(value, NotBlankBoolean, message);
}
