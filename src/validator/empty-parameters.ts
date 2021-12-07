import Validator from "@dikac/t-validator/simple";
import EmptyValidatable from "../validatable/empty-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import EmptyString from "../assert/string/empty-parameters";
import Static from "@dikac/t-validator/message/function/static";


export default function EmptyParameters() : Validator<string, '', Readonly<Instance<'', string>>>;

export default function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType>
) : Validator<string, '', Readonly<Instance<'', MessageType>>>;

export default function EmptyParameters<MessageType>(
    message : Static.Parameters<'', string, false, true, MessageType|string> = EmptyString
) : Validator<string, '', Readonly<Instance<'', MessageType>>> {

    return function (value) {

        return EmptyValidatable(value, message);

    } as Validator<string, '', Readonly<Instance<'', MessageType>>>
}
