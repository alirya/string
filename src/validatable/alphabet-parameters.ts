import AlphabetFromObject from "../boolean/alphabet";
import ValidatableCallbacks from "@alirya/validator/validatable/callback-class-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export default function AlphabetParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic<ValueType, MessageType>
) {

    return new ValidatableCallbacks<ValueType, MessageType>(value, AlphabetFromObject, message);
}
