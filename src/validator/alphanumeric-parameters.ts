import Validator from "@dikac/t-validator/validator";
import AlphanumericValidatable from "../validatable/alphanumeric";
import Instance from "@dikac/t-validator/validatable/dynamic";
import AlphanumericString from "../assert/string/alphanumeric";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function AlphanumericParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphanumericString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable.Parameters(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>

}
