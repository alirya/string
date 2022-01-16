import Value from "@alirya/value/value";
import Return from "@alirya/validator/validatable/simple";
import Instance from "@alirya/validator/validatable/validatable";
import Message from "@alirya/message/message";
import StringParameters from "./string-parameters";
import Simple from "@alirya/validator/message/function/simple-parameter";

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
