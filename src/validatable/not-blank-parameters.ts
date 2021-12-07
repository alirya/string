import NotBlankBoolean from "../boolean/not-blank";
import Callback from "@dikac/t-validator/validatable/callback-function-parameters";
import Dynamic from "@dikac/t-validator/validatable/validatable";
import MessageDynamic from "@dikac/t-validator/message/function/validatable-parameters";

export default function NotBlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageDynamic<ValueType, MessageType>,
) : Dynamic<ValueType, MessageType> {

    return Callback(value, NotBlankBoolean, message) as Dynamic<ValueType, MessageType>;

}
