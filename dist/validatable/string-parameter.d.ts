import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Message from "@dikac/t-message/message";
import Simple from "@dikac/t-validator/message/function/simple";
export declare type StringArgument<Argument, MessageType> = Value<Argument> & Message<Simple.Parameter<unknown, Argument, MessageType>>;
export default function StringParameter<Argument, MessageType>({ value, message }: StringArgument<Argument, MessageType>): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>>;
