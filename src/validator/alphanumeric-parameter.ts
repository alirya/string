import Validator from '@alirya/validator/simple';
import AlphanumericValidatable from '../validatable/alphanumeric-parameter';
import Instance from '@alirya/validator/validatable/validatable';
import AlphanumericString from '../assert/string/alphanumeric-parameter';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';

export default function AlphanumericParameter() : Validator<string, string, Readonly<Instance<string, string>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic<string, MessageType>
) : Validator<string, string, Readonly<Instance<string, MessageType>>>;

export default function AlphanumericParameter<MessageType>(
    message : Dynamic<string, MessageType|string> = AlphanumericString
) : Validator<string, string, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return AlphanumericValidatable({value, message});

    } as Validator<string, string, Readonly<Instance<string, MessageType>>>;

}
