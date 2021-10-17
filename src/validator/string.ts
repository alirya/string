import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import StringValidatable from "../validatable/string";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default function String<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return StringValidatable(value, message);

    } as Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>
}
