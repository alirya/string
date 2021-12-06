import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NumericFromObject from "../boolean/numeric";
import Callback from "@dikac/t-validator/validatable/callback";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function NumericParameters<ValueType extends string, MessageType>(
    value : ValueType,
    message : Dynamic.Parameters<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback.Function.Parameters(value, NumericFromObject, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}

