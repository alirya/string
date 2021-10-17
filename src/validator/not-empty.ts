import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default function NotEmpty<MessageType>(
    message : (result:Readonly<Value<string> & Validatable>)=>MessageType
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return new NotEmptyValidatable(value, message);

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>
}
