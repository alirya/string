import Validator from "@dikac/t-validator/simple";
import EmptyValidatable from "../validatable/empty";
import Instance from "@dikac/t-validator/validatable/validatable";
import EmptyString from "../assert/string/empty";
import Static from "@dikac/t-validator/message/function/static";

export default function EmptyParameter() : Validator<string, '', Readonly<Instance<'', string>>>;

export default function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType>
) : Validator<string, '', Readonly<Instance<'', MessageType>>>;

export default function EmptyParameter<MessageType>(
    message : Static.Parameter<'', string, false, true, MessageType|string>= EmptyString.Parameter
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return function (value) {

        return EmptyValidatable.Parameter({value, message});

    } as Validator<string, '', Readonly<Instance<'', MessageType>>>
}
