import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import BlankParameters from "./blank-parameters";

export type BlankArgument<ValueType extends string, MessageType>
    = Value<ValueType> &
    Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export default function BlankParameter<ValueType extends string, MessageType>({
    value,
    message
} : Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>) {

    return BlankParameters(value, (value, valid) =>  message({value, valid}));
}

