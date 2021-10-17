import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import AlphanumericValidatable from "../validatable/alphanumeric";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default function Alphanumeric<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return new AlphanumericValidatable(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>

}
