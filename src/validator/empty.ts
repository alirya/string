import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function Empty<MessageType>(
    message : (result:Readonly<Value<string> & Validatable>)=>MessageType
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return function (value) {

        return new EmptyValidatable(value, message);

    } as Validator<string, '', Readonly<Instance<'', MessageType>>>
}
