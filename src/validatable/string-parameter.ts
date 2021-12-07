import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Message from "@dikac/t-message/message";
import StringParameters from "./string-parameters";
import Simple from "@dikac/t-validator/message/function/simple-parameter";

export type StringArgument<Argument, MessageType> =
    Value<Argument> &
    Message<Simple<Argument, Argument, MessageType>>;

export default function StringParameter<Argument, MessageType>(
    {
      value,
      message
    } : StringArgument<Argument, MessageType>
) : Return<Argument, string, Readonly<Instance<unknown, MessageType>>> {

    return StringParameters(value, (value, valid)=>message({valid, value}));
}
