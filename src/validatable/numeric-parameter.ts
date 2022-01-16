import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";
import NumericParameters from "./numeric-parameters";

export type NumericArgument<ValueType extends string, MessageType>
    = Message<Dynamic<ValueType, MessageType>> & Value<ValueType>;

export default function NumericParameter<ValueType extends string, MessageType>({
        value,
        message
    } : NumericArgument<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return NumericParameters(value, (value, valid)=>message({value, valid}));
}
