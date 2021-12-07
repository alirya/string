import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty-parameter";
import Instance from "@dikac/t-validator/validatable/validatable";
import NotEmptyString from "../assert/string/not-empty-parameter";
import FunctionStatic from "@dikac/t-validator/message/function/static-parameter";

export default function NotEmptyParameter() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export default function NotEmptyParameter<MessageType>(
    message : FunctionStatic<'', string, false, true, MessageType>
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export default function NotEmptyParameter<MessageType>(
    message : FunctionStatic<'', string, false, true, MessageType|string> = NotEmptyString
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable({value, message});

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>
}
