import Validator from "@dikac/t-validator/simple";
import AlphanumericValidatable from "../validatable/alphanumeric-parameter";
import Instance from "@dikac/t-validator/validatable/validatable";
import AlphanumericString from "../assert/string/alphanumeric-parameter";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function AlphanumericParameter() : Validator<string, string, Readonly<Instance<string, string>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, Readonly<Instance<string, MessageType>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphanumericString
) : Validator<string, string, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable({value, message});

    } as Validator<string, string, Readonly<Instance<string, MessageType>>>

}
