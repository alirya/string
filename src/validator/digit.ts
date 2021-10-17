import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import DigitValidatable from "../validatable/digit";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function Digit<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType
) {

    return function (value) {

        return new DigitValidatable(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
