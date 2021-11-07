import Validator from "@dikac/t-validator/validator";
import MatchValidatable from "../validatable/match";
import Instance from "@dikac/t-validator/validatable/dynamic";
import MatchString from "../assert/string/match";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function MatchParameters(
    pattern : RegExp,
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function MatchParameters<MessageType>(
    pattern : RegExp,
    message : Dynamic.Parameters<string, MessageType, [pattern:RegExp]>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function MatchParameters<MessageType>(
    pattern : RegExp,
    message : Dynamic.Parameters<string, MessageType|string, [pattern:RegExp]> = MatchString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return new MatchValidatable.Parameters(value, pattern, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}

