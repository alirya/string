import Validator from '@alirya/validator/validator';
import MinimumValidatable, {MinimumParametersReturn} from '../validatable/minimum';
import Count from '../number/count';
import MinimumString from '../assert/string/minimum';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import Inclusive from '@alirya/number/inclusive/inclusive';
import MinimumNumber from '@alirya/number/minimum/minimum';
import StrictOmit from '@alirya/object/strict-omit';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';

export type MinimumArgumentsMessage<MessageType> =
    (value:string, valid : boolean, minimum : number, inclusive : boolean)=>MessageType;


export function MinimumParameters(
    minimum : number,
    inclusive : boolean,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, string>>;

export function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumArgumentsMessage<MessageType>,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;

export function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumArgumentsMessage<MessageType>,
    converter : (value:string)=>number,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;

export function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumArgumentsMessage<MessageType|string> = MinimumString.Parameters,
    converter : (value:string)=>number = Count,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>> {

    return function (value) {

        return MinimumValidatable.Parameters(value, minimum, inclusive, message, converter);

    } as Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;
}


export type MinimumArgument<MessageType> =
    MinimumNumber &
    Inclusive &
    Validatable &
    {converter ?: (value:string)=>number} &
    Message<(result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType> &
    ValidatableParameter<string, MessageType>;


export function MinimumParameter(
    {
        minimum,
        inclusive,
        converter
    } : StrictOmit<MinimumArgument<any>, 'message'>
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, string>>;

export function MinimumParameter<MessageType>(
    {
        minimum,
        inclusive,
        message,
        converter
    } : MinimumArgument<MessageType>
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;

export function MinimumParameter<MessageType>(
    {
        minimum,
        inclusive,
        message = MinimumString.Parameter,
        converter
    } : MinimumArgument<MessageType|string>
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>> {

    return function (value) {

        return MinimumValidatable.Parameter({value, minimum, inclusive, message, converter});

    } as Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;
}


namespace Minimum {
    export const Parameters = MinimumParameters;
    export const Parameter = MinimumParameter;
}
export default Minimum;
