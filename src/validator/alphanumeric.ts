import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import AlphanumericValidatable from "../validatable/alphanumeric";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Return from "@dikac/t-validator/validatable/simple";
import AlphanumericString from "../validatable/string/alphanumeric";

export default function Alphanumeric() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function Alphanumeric<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function Alphanumeric<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType|string = AlphanumericString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable({value, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>

}
