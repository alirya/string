import Validator from "@dikac/t-validator/simple";
import AlphanumericValidatable from "../validatable/alphanumeric";
import Instance from "@dikac/t-validator/validatable/validatable";
import AlphanumericString from "../assert/string/alphanumeric";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function AlphanumericParameter() : Validator<string, string, Readonly<Instance<string, string>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, Readonly<Instance<string, MessageType>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphanumericString.Parameter
) : Validator<string, string, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable.Parameter({value, message});

    } as Validator<string, string, Readonly<Instance<string, MessageType>>>

}
