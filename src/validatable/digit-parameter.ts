import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import DigitParameters from "./digit-parameters";

export type DigitArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export default function DigitParameter<ValueType extends string, MessageType>({
    value,
    message,
} : DigitArgument<ValueType, MessageType>) : Readonly<Value<ValueType> & Message<MessageType> & Validatable>{

    return DigitParameters(value, (value, valid) => message({value, valid}));
}
