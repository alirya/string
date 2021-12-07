import Validator from "@dikac/t-validator/simple";
import EmptyValidatable from "../validatable/empty-parameter";
import Instance from "@dikac/t-validator/validatable/validatable";
import EmptyString from "../assert/string/empty-parameter";
import Static from "@dikac/t-validator/message/function/static-parameter";

export default function EmptyParameter() : Validator<string, '', Readonly<Instance<'', string>>>;

export default function EmptyParameter<MessageType>(
    message : Static<'', string, false, true, MessageType>
) : Validator<string, '', Readonly<Instance<'', MessageType>>>;

export default function EmptyParameter<MessageType>(
    message : Static<'', string, false, true, MessageType|string>= EmptyString
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return function (value) {

        return EmptyValidatable({value, message});

    } as Validator<string, '', Readonly<Instance<'', MessageType>>>
}
