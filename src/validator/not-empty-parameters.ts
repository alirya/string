import Validator from "@dikac/t-validator/validator";
import NotEmptyValidatable from "../validatable/not-empty";
import Instance from "@dikac/t-validator/validatable/validatable";
import NotEmptyString from "../assert/string/not-empty";
import FunctionStatic from "@dikac/t-validator/message/function/static";

export default function NotEmptyParameters() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export default function NotEmptyParameters<MessageType>(
    message : FunctionStatic.Parameters<'', string, false, true, MessageType>
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export default function NotEmptyParameters<MessageType>(
    message : FunctionStatic.Parameters<'', string, false, true, MessageType|string> = NotEmptyString.Parameters
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable.Parameters(value, message);

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>
}

