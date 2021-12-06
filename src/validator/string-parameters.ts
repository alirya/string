import Validator from "@dikac/t-validator/simple";
import StringValidatable from "../validatable/string";
import Instance from "@dikac/t-validator/validatable/validatable";
import StringString from "../assert/string/string";
import Simple from "@dikac/t-validator/message/function/simple";

export type StringParametersType<MessageType> = Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export default function StringParameters() : StringParametersType<string>;

export default function StringParameters<MessageType>(
    message : Simple.Parameters<unknown, string, MessageType>
) : StringParametersType<MessageType>;

export default function StringParameters<MessageType>(
    message : Simple.Parameters<unknown, string, MessageType|string> = StringString.Parameters
) : StringParametersType<MessageType> {

    return function (value) {

        return StringValidatable.Parameters(value, message);

    } as StringParametersType<MessageType>
}
