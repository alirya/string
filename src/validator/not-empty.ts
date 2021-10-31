import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Return from "@dikac/t-validator/validatable/simple";
import NotEmptyString from "../validatable/string/not-empty";

export default function NotEmpty() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export default function NotEmpty<MessageType>(
    message : (result:Readonly<Value<string> & Validatable>)=>MessageType
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export default function NotEmpty<MessageType>(
    message : (result:Readonly<Value<string> & Validatable>)=>MessageType|string = NotEmptyString
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable({value, message});

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>
}
