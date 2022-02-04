import Validator from '@alirya/validator/simple';
import StringValidatable from '../validatable/string-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import StringString from '../assert/string/string-parameters';
import Simple from '@alirya/validator/message/function/simple-parameters';

export type StringParametersReturn<MessageType> = Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export default function StringParameters() : StringParametersReturn<string>;

export default function StringParameters<MessageType>(
    message : Simple<unknown, string, MessageType>
) : StringParametersReturn<MessageType>;

export default function StringParameters<MessageType>(
    message : Simple<unknown, string, MessageType|string> = StringString
) : StringParametersReturn<MessageType> {

    return function (value) {

        return StringValidatable(value, message);

    } as StringParametersReturn<MessageType>;
}
