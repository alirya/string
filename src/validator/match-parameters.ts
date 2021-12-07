import Validator from "@dikac/t-validator/validator";
import MatchValidatable from "../validatable/match-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import MatchString from "../assert/string/match-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";

export default function MatchParameters(
    pattern : RegExp,
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function MatchParameters<MessageType>(
    pattern : RegExp,
    message : Dynamic<string, MessageType, [pattern:RegExp]>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function MatchParameters<MessageType>(
    pattern : RegExp,
    message : Dynamic<string, MessageType|string, [pattern:RegExp]> = MatchString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return new MatchValidatable(value, pattern, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}

