import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import DigitValidatable from "../validatable/digit";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import DigitString from "../validatable/string/digit";

export default function Digit() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function Digit<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function Digit<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType|string = DigitString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return DigitValidatable({value, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
