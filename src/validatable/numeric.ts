import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NumericFromObject from "../boolean/numeric";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Callback from "@dikac/t-validator/validatable/callback";
import StringGuard from "../boolean/string";

export default function Numeric<ValueType extends string, MessageType>({
        value,
        message
    } : Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback(value, NumericFromObject, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}
