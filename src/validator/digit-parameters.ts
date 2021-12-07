import Validator from "@dikac/t-validator/validator";
import DigitValidatable from "../validatable/digit-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import DigitString from "../assert/string/digit-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function DigitParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = DigitString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
