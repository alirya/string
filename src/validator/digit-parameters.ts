import Validator from "@dikac/t-validator/validator";
import DigitValidatable from "../validatable/digit";
import Instance from "@dikac/t-validator/validatable/validatable";
import DigitString from "../assert/string/digit";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function DigitParameters() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function DigitParameters<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = DigitString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable.Parameters(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
