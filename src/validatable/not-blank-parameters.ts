import NotBlankBoolean from "../boolean/not-blank";
import Callback from "@dikac/t-validator/validatable/callback";
import Dynamic from "@dikac/t-validator/validatable/dynamic";
import MessageDynamic from "@dikac/t-validator/message/function/dynamic";

export default function NotBlankParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : MessageDynamic.Parameters<ValueType, MessageType>,
) : Dynamic<ValueType, MessageType> {

    return Callback.Function.Parameters(value, NotBlankBoolean, message) as Dynamic<ValueType, MessageType>;

}
