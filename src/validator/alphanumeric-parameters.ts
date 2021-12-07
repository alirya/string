import Validator from "@dikac/t-validator/validator";
import AlphanumericValidatable from "../validatable/alphanumeric-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import AlphanumericString from "../assert/string/alphanumeric-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function AlphanumericParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function AlphanumericParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphanumericString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>

}
