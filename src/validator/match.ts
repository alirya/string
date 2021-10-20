import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MatchValidatable from "../validatable/match";
import Instance from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";
import MatchString from "../validatable/string/match";
import Pattern from "../pattern/pattern/pattern";


export default function Match(
    {pattern} : Pattern,
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function Match<MessageType>(
    {
        pattern,
        message
    } : Message<(result: Readonly<Value<string> & Validatable>) => MessageType> & Pattern
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function Match<MessageType>(
    {
       pattern,
       message = MatchString
   } : Message<(result: Readonly<Value<string> & Validatable>) => MessageType|string> & Pattern
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return MatchValidatable({value, pattern, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
