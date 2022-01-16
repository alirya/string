import Validator from "@alirya/validator/simple";
import DigitValidatable from "../validatable/digit-parameter";
import Instance from "@alirya/validator/validatable/validatable";
import DigitString from "../assert/string/digit-parameter";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";

export default function DigitParameter() : Validator<string, string, Readonly<Instance<string, string>>>;

export default function DigitParameter<MessageType>(
        message : Dynamic<string, MessageType>
) : Validator<string, string, Readonly<Instance<string, MessageType>>>;

export default function DigitParameter<MessageType>(
        message : Dynamic<string, MessageType|string> = DigitString
) : Validator<string, string, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable({value, message});

    } as Validator<string, string, Readonly<Instance<string, MessageType>>>
}
