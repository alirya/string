import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Simple from "@dikac/t-validator/message/function/simple";
export declare type StringParametersType<MessageType> = Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;
export default function StringParameters(): StringParametersType<string>;
export default function StringParameters<MessageType>(message: Simple.Parameters<unknown, string, MessageType>): StringParametersType<MessageType>;
