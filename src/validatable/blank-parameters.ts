import ValidatableCallbacks from "@alirya/validator/validatable/callback-function-parameters";
import NotBlankBoolean from "../boolean/not-blank";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";


export default function BlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic<ValueType, MessageType>,
) {

    return ValidatableCallbacks<string, ValueType, MessageType>(value, NotBlankBoolean, message);
}
