import Validator from "@dikac/t-validator/validator";
import AlphabetValidatable from "../validatable/alphabet-parameter";
import Instance from "@dikac/t-validator/validatable/validatable";
import AlphabetString from "../assert/string/alphabet-parameter";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export default function AlphabetParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphabetString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphabetValidatable({value, message})

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
