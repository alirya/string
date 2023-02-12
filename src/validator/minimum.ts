import Validator from '@alirya/validator/validator.js';
import MinimumValidatable, {MinimumReturnContext} from '../validatable/minimum.js';
import Count from '../number/count.js';
import MinimumString from '../assert/string/minimum.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import Value from '@alirya/value/value.js';
import Inclusive from '@alirya/number/inclusive/inclusive.js';
import MinimumNumber from '@alirya/number/minimum/minimum.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import {StringParameters} from './string.js';
import SimpleValidator from "@alirya/validator/simple.js";

export function MinimumParameters(
    minimum : number,
    inclusive : boolean,
) : MinimumReturn<string>;

export function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumArgumentsMessage<MessageType>,
    converter ?: (value:string)=>number,
) : MinimumReturn<MessageType>;

export function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumArgumentsMessage<MessageType>,
    converter : (value:string)=>number,
) : MinimumReturn<MessageType>;

export function MinimumParameters(
    minimum : number,
    inclusive : boolean,
    message : undefined,
    converter ?: (value:string)=>number,
) : MinimumReturn<string>;

export function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumArgumentsMessage<MessageType|string> = MinimumString.Parameters,
    converter : (value:string)=>number = Count,
) : MinimumReturn<MessageType> {

    const stringValidator = StringParameters();

    return function (value) {

        const validatable = stringValidator(value);

        if(!validatable.valid) {

            return Object.assign(validatable, {minimum, inclusive});
        }

        return MinimumValidatable.Parameters(value, minimum, inclusive, message, converter);

    } as MinimumReturn<MessageType>;
}




export function MinimumParameter(
    {
        minimum,
        inclusive,
        converter
    } : StrictOmit<MinimumArgument<any>, 'message'>
) : MinimumReturn<string>;

export function MinimumParameter<MessageType>(
    {
        minimum,
        inclusive,
        message,
        converter
    } : MinimumArgument<MessageType>
) : MinimumReturn<MessageType>;

export function MinimumParameter<MessageType>(
    {
        minimum,
        inclusive,
        message = MinimumString.Parameter,
        converter
    } : MinimumArgument<MessageType|string>
) : MinimumReturn<MessageType|string> {

    return MinimumParameters(
        minimum,
        inclusive,
        (value, valid, minimum, inclusive) => message({value, valid, minimum, inclusive}),
        converter
    ) as MinimumReturn<MessageType|string>;
}

export type MinimumReturn<MessageType> = Validator<string, string, boolean, boolean, MessageType, MinimumReturnContext>;

export type MinimumArgumentsMessage<MessageType> = (value:string, valid : boolean, minimum : number, inclusive : boolean)=>MessageType;

export type MinimumArgument<MessageType> =
    MinimumReturnContext &
    Validatable &
    {converter ?: (value:string)=>number} &
    Message<(result:Readonly<Value<string> & MinimumReturnContext & Validatable>)=>MessageType> &
    ValidatableParameter<string, MessageType>;


namespace Minimum {
    export const Parameters = MinimumParameters;
    export const Parameter = MinimumParameter;
}
export default Minimum;
