import Validator from "@dikac/t-validator/validator";
import AlphabetValidatable from "../validatable/alphabet";
import Instance from "@dikac/t-validator/validatable/dynamic";
import AlphabetString from "../assert/string/alphabet";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function AlphabetParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function AlphabetParameter<MessageType>(
    message : Dynamic.Parameter<string, MessageType|string> = AlphabetString.Parameter
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphabetValidatable.Parameter({value, message})

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
