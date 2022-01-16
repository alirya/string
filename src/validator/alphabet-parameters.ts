import Validator from "@alirya/validator/validator";
import AlphabetValidatable from "../validatable/alphabet-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import AlphabetString from "../assert/string/alphabet-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export default function Alphabet() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function Alphabet<MessageType>(
    message : Dynamic<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function Alphabet<MessageType>(
    message : Dynamic<string, MessageType|string> = AlphabetString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphabetValidatable(value, message)

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
