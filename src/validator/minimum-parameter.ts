import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import MinimumValidatable, {MinimumType} from '../validatable/minimum-parameter';
import Inclusive from '@alirya/number/inclusive/inclusive';
import MinimumNumber from '@alirya/number/minimum/minimum';
import StrictOmit from '@alirya/object/strict-omit';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';

export type Argument<MessageType> =
    MinimumNumber &
    Inclusive &
    Validatable &
    {converter ?: (value:string)=>number} &
    Message<(result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType> &
    Dynamic<string, MessageType>;


export default function MinimumParameter(
    {
        minimum,
        inclusive,
        converter
    } : StrictOmit<Argument<any>, 'message'>
) : Validator<string, string, boolean, boolean, MinimumType<string, string>>;

export default function MinimumParameter<MessageType>(
    {
        minimum,
        inclusive,
        message,
        converter
    } : Argument<MessageType>
) : Validator<string, string, boolean, boolean, MinimumType<string, MessageType>>;

export default function MinimumParameter<MessageType>(
    {
        minimum,
        inclusive,
        message,
        converter
    } : Argument<MessageType|string>
) : Validator<string, string, boolean, boolean, MinimumType<string, MessageType>> {

    return function (value) {

        return MinimumValidatable({value, minimum, inclusive, message, converter});

    } as Validator<string, string, boolean, boolean, MinimumType<string, MessageType>>;
}
