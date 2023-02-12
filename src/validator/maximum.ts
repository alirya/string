import SimpleValidator from '@alirya/validator/simple.js';
import MaximumValidatable, {MaximumReturnContext} from '../validatable/maximum.js';
import Count from '../number/count.js';
import MaximumString from '../assert/string/maximum.js';
import Dynamic from '@alirya/validator/message/function/validatable.js';
import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import Value from '@alirya/value/value.js';
import Inclusive from '@alirya/number/inclusive/inclusive.js';
import MaximumNumber from '@alirya/number/maximum/maximum.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import {O} from 'ts-toolbelt';
import {StringParameters} from './string.js';



export function MaximumParameters(
    maximum : number,
    inclusive : boolean,
) : MaximumReturn<string>;

export function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter ?: (value:string)=>number,
) : MaximumReturn<MessageType>;

export function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter : (value:string)=>number,
) : MaximumReturn<MessageType>;

export function MaximumParameters(
    maximum : number,
    inclusive : boolean,
    message : undefined,
    converter ?: (value:string)=>number,
) : MaximumReturn<string>;


export function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType|string> = MaximumString.Parameters,
    converter : (value:string)=>number = Count,
) : MaximumReturn<MessageType|string> {

    const stringValidator = StringParameters();

    return function (value) {

        const validatable = stringValidator(value);

        if(!validatable.valid) {

            return Object.assign(validatable, {maximum, inclusive});
        }

        return MaximumValidatable.Parameters(value, maximum, inclusive, message, converter);

    } as MaximumReturn<MessageType|string>;
}


export function MaximumParameter(
    {
        maximum,
        inclusive,
    } : StrictOmit<MaximumArgument<unknown>, 'message'|'converter'>
) : MaximumReturn<string>;

export function MaximumParameter(
    {
        maximum,
        inclusive,
        converter,
    } : O.Required<MaximumArgument<unknown>, 'converter'>
) : MaximumReturn<string>;

export function MaximumParameter<MessageType> (
    {
        maximum,
        inclusive,
        message,
    } : O.Required<MaximumArgument<unknown>, 'message'>
) : MaximumReturn<MessageType>;

export function MaximumParameter<MessageType>(
    {
        maximum,
        inclusive,
        message,
        converter,
    } : MaximumArgument<MessageType>
) : MaximumReturn<MessageType>;

export function MaximumParameter<MessageType>(
    {
        maximum,
        inclusive,
        message = MaximumString.Parameter,
        converter,
    } : MaximumArgument<MessageType|string>
) : MaximumReturn<MessageType|string> {

    return MaximumParameters(
        maximum,
        inclusive,
        (value, valid, maximum, inclusive) => message({value, valid, maximum, inclusive}),
        converter
    ) as MaximumReturn<MessageType|string>;
}

export type MaximumReturn<MessageType> = Validator<string, string, boolean, boolean, MessageType, MaximumReturnContext>;

export type MaximumArgumentMessage<MessageType> =
    Dynamic.Parameters<string,  MessageType, [maximum : number, inclusive: boolean, converter : (string:string)=>number]>;

export type MaximumArgument<MessageType> =
    MaximumReturnContext &
    Validatable &
    {converter ?: (value:string)=>number} &
    Partial<Message<(result:Readonly<Value<string> & MaximumReturnContext & Validatable>)=>MessageType>>;

namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;
    export type ArgumentMessage<MessageType> = MaximumArgumentMessage<MessageType>;
    export type Argument<MessageType> = MaximumArgument<MessageType>;
}
export default Maximum;
