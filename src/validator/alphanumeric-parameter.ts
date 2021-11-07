import Validator from "@dikac/t-validator/validator";
import AlphanumericValidatable from "../validatable/alphanumeric";
import Instance from "@dikac/t-validator/validatable/dynamic";
import AlphanumericString from "../assert/string/alphanumeric";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function AlphanumericParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphanumericString.Parameter
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable.Parameter({value, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>

}
