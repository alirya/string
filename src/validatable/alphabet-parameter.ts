import Value from "@alirya/value/value";
import Message from "@alirya/message/message";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";
import AlphabetParameters from "./alphabet-parameters";

export type AlphabetArgument<ValueType extends string, MessageType>
    = Value<ValueType> &
    Message<Dynamic<ValueType, MessageType>>;

export default function AlphabetParameter<ValueType extends string, MessageType>({
    value,
    message
} : AlphabetArgument<ValueType, MessageType>) {

    return AlphabetParameters(value, (value, valid)=>message({value, valid}))
}

