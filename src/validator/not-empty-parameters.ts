import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import NotEmptyString from "../assert/string/not-empty-parameters";
import FunctionStatic from "@dikac/t-validator/message/function/static-parameters";

export default function NotEmptyParameters() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export default function NotEmptyParameters<MessageType>(
    message : FunctionStatic<'', string, false, true, MessageType>
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export default function NotEmptyParameters<MessageType>(
    message : FunctionStatic<'', string, false, true, MessageType|string> = NotEmptyString
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable(value, message);

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>
}

