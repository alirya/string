import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import AlphabetValidatable from "../validatable/alphabet";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Return from "@dikac/t-validator/validatable/simple";
import AlphabetString from "../validatable/string/alphabet";

export default function Alphabet() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function Alphabet<MessageType>(
    message : (result:Readonly<Value<string> & Validatable>)=>MessageType
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function Alphabet<MessageType>(
    message : (result:Readonly<Value<string> & Validatable>)=>MessageType|string = AlphabetString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphabetValidatable({value, message})

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
