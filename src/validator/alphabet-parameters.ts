import Validator from "@dikac/t-validator/validator";
import AlphabetValidatable from "../validatable/alphabet";
import Instance from "@dikac/t-validator/validatable/dynamic";
import AlphabetString from "../assert/string/alphabet";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function Alphabet() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function Alphabet<MessageType>(
    message : Dynamic.Parameters<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function Alphabet<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = AlphabetString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphabetValidatable.Parameters(value, message)

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
