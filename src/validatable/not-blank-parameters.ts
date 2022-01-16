import NotBlankBoolean from "../boolean/not-blank";
import Callback from "@alirya/validator/validatable/callback-function-parameters";
import Dynamic from "@alirya/validator/validatable/validatable";
import MessageDynamic from "@alirya/validator/message/function/validatable-parameters";

export default function NotBlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageDynamic<ValueType, MessageType>,
) : Dynamic<ValueType, MessageType> {

    return Callback(value, NotBlankBoolean, message) as Dynamic<ValueType, MessageType>;

}
