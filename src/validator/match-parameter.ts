import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import Instance from '@alirya/validator/validatable/validatable';
import Pattern from '../pattern/pattern/pattern';
import MatchParameters from './match-parameters';


export default function MatchParameter(
    {pattern} : Pattern,
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function MatchParameter<MessageType>(
    {
        pattern,
        message
    } : Message<(result: Readonly<Value<string> & Validatable & Pattern>) => MessageType> & Pattern
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function MatchParameter<MessageType>(
    {
       pattern,
       message
   } : Message<(result: Readonly<Value<string> & Validatable & Pattern>) => MessageType|string> & Pattern
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return MatchParameters(
        pattern,
        (value, valid, pattern) => message({value, valid, pattern})
    ) as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
}
