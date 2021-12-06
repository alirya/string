import Validator from "@dikac/t-validator/simple";
import DigitValidatable from "../validatable/digit";
import Instance from "@dikac/t-validator/validatable/validatable";
import DigitString from "../assert/string/digit";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function DigitParameter() : Validator<string, string, Readonly<Instance<string, string>>>;

export default function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, Readonly<Instance<string, MessageType>>>;

export default function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType|string> = DigitString.Parameter
) : Validator<string, string, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable.Parameter({value, message});

    } as Validator<string, string, Readonly<Instance<string, MessageType>>>
}
