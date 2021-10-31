import Callback from "@dikac/t-validator/validatable/callback";
import StringGuard from "../boolean/string";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Message from "@dikac/t-message/message";

export default String;
namespace String {

    export const Parameter = StringParameter;
    export const Object = StringObject;
    export type Argument<ValueType, MessageType> = StringArgument<ValueType, MessageType>;
}


export function StringParameter<MessageType, Argument>(
    value : Argument,
    message : (value:Argument, valid: boolean)=>MessageType
) : Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>> {

    return <Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>>> Callback.Function.Parameter(value, StringGuard, message);
}

export type StringArgument<MessageType, Argument> = Value<Argument> & Message<(result:Readonly<Value<Argument> & Validatable>)=>MessageType>;

export function StringObject<MessageType, Argument>(
    {
      value,
      message
    } : StringArgument<MessageType, Argument>
) : Return<unknown, Argument, string, Readonly<Instance<unknown, MessageType>>> {

    return StringParameter(value, message);
}
