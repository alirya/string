import Validator from "@alirya/validator/validator";
import AlphanumericValidatable from "../validatable/alphanumeric-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import AlphanumericString from "../assert/string/alphanumeric-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export default function AlphanumericParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function AlphanumericParameters<MessageType>(
    message : Dynamic<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function AlphanumericParameters<MessageType>(
    message : Dynamic<string, MessageType|string> = AlphanumericString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>

}
