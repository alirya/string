import Validator from "@dikac/t-validator/validator";
import DigitValidatable from "../validatable/digit";
import Instance from "@dikac/t-validator/validatable/dynamic";
import DigitString from "../assert/string/digit";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function DigitParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function DigitParameter<MessageType>(
        message : Dynamic.Parameter<string, MessageType|string> = DigitString.Parameter
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable.Parameter({value, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
