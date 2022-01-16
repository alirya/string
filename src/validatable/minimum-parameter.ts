import MinimumNumber from '@alirya/number/minimum/minimum';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Inclusive from '@alirya/number/inclusive/inclusive';
import MinimumParameters, {MinimumType} from './minimum-parameters';

export {MinimumType};

export type MinimumArgument<ValueType extends string, MessageType> =
    Value<ValueType> &
    MinimumNumber &
    Inclusive &
    {converter ?: (value:ValueType)=>number} &
    Message<(result:Readonly<Value<ValueType> & Inclusive & MinimumNumber & Validatable>)=>MessageType>;

export default function MinimumParameter<ValueType extends string, MessageType>(
     {
         value,
         minimum,
         inclusive,
         message,
         converter
     } : MinimumArgument<ValueType, MessageType>
) : MinimumType<ValueType, MessageType> {

    return MinimumParameters(
        value,
        minimum,
        inclusive,
        (value, valid, minimum, inclusive) => message({value, valid, minimum, inclusive}),
        converter
    );

}
