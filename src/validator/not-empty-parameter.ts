import Validator from '@alirya/validator/validator';
import NotEmptyValidatable from '../validatable/not-empty-parameter';
import Instance from '@alirya/validator/validatable/validatable';
import NotEmptyString from '../assert/string/not-empty-parameter';
import FunctionStatic from '@alirya/validator/message/function/static-parameter';

export default function NotEmptyParameter() : Validator<string, '', true, false, Readonly<Instance<string, string>>>;

export default function NotEmptyParameter<MessageType>(
    message : FunctionStatic<'', string, false, true, MessageType>
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;

export default function NotEmptyParameter<MessageType>(
    message : FunctionStatic<'', string, false, true, MessageType|string> = NotEmptyString
) : Validator<string, '', true, false, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NotEmptyValidatable({value, message});

    } as Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;
}
