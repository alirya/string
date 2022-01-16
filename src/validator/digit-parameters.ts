import Validator from "@alirya/validator/validator";
import DigitValidatable from "../validatable/digit-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import DigitString from "../assert/string/digit-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export default function DigitParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function DigitParameters<MessageType>(
    message : Dynamic<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function DigitParameters<MessageType>(
    message : Dynamic<string, MessageType|string> = DigitString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
