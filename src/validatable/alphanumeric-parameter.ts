import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import AlphanumericParameters from './alphanumeric-parameters';

export type AlphanumericArgument<ValueType extends string, MessageType>
    =
    Value<ValueType> & Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType>;

export default function AlphanumericParameter<ValueType extends string, MessageType>({
    value,
    message
} : AlphanumericArgument<ValueType, MessageType>) {

    return AlphanumericParameters(value, (value, valid) =>  message({value, valid}));
}

