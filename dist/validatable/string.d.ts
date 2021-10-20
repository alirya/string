import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
export default function String<MessageType, Argument>({ value, message }: Value<Argument> & Message<(result: Readonly<Value<Argument> & Validatable>) => MessageType>): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>>;
