import AlphanumericFromObject from "../boolean/alphanumeric";
import ValidatableCallbacks from "@alirya/validator/validatable/callback-class-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export default function AlphanumericParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic<ValueType, MessageType>
) {

    return new ValidatableCallbacks<ValueType, MessageType>(value, AlphanumericFromObject, message, []);
}


