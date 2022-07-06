import SimpleValidator from '@alirya/validator/simple.js';
import MaximumValidatable, {MaximumReturn} from '../validatable/maximum.js';
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
import {Object} from 'ts-toolbelt';

export type MaximumArgumentMessage<MessageType> =
    Dynamic.Parameters<string,  MessageType, [maximum : number, inclusive: boolean, converter : (string:string)=>number]>;

export function MaximumParameters(
    maximum : number,
    inclusive : boolean,
) : SimpleValidator<string, string, MaximumReturn<string, string>>;

export function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter ?: (value:string)=>number,
) : SimpleValidator<string, string, MaximumReturn<string, MessageType>>;

export function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter : (value:string)=>number,
) : SimpleValidator<string, string, MaximumReturn<string, MessageType>>;

export function MaximumParameters(
    maximum : number,
    inclusive : boolean,
    message : undefined,
    converter ?: (value:string)=>number,
) : SimpleValidator<string, string, MaximumReturn<string, string>>;


export function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType|string> = MaximumString.Parameters,
    converter : (value:string)=>number = Count,
) : SimpleValidator<string, string, MaximumReturn<string, MessageType>> {

    return function (value) {

        return MaximumValidatable.Parameters(value, maximum, inclusive, message, converter);

    } as SimpleValidator<string, string, MaximumReturn<string, MessageType>>;
}



export type MaximumArgument<MessageType> =
    MaximumNumber &
    Inclusive &
    Validatable &
    {converter ?: (value:string)=>number} &
    Partial<Message<(result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageType>>;

export function MaximumParameter(
    {
        maximum,
        inclusive,
    } : StrictOmit<MaximumArgument<unknown>, 'message'|'converter'>
) : Validator<string, string, boolean, boolean, MaximumReturn<string, string>>;

export function MaximumParameter(
    {
        maximum,
        inclusive,
        converter,
    } : Object.Required<MaximumArgument<unknown>, 'converter'>
) : Validator<string, string, boolean, boolean, MaximumReturn<string, string>>;

export function MaximumParameter<MessageType> (
    {
        maximum,
        inclusive,
        message,
    } : Object.Required<MaximumArgument<unknown>, 'message'>
) : Validator<string, string, boolean, boolean, MaximumReturn<string, MessageType>>;

export function MaximumParameter<MessageType>(
    {
        maximum,
        inclusive,
        message,
        converter,
    } : MaximumArgument<MessageType|string>
) : Validator<string, string, boolean, boolean, MaximumReturn<string, MessageType>>;

export function MaximumParameter<MessageType>(
    {
        maximum,
        inclusive,
        message,
        converter,
    } : MaximumArgument<MessageType>
) : Validator<string, string, boolean, boolean, MaximumReturn<string, MessageType|string>> {

    if(message) {

        return MaximumParameters(
            maximum,
            inclusive,
            (value, valid, maximum, inclusive) => message({value, valid, maximum, inclusive}),
            converter
        );

    } else {
        return MaximumParameters(
            maximum,
            inclusive,
            message,
            converter
        );
    }
}


namespace Maximum {
    export const Parameters = MaximumParameters;
    export const Parameter = MaximumParameter;
    export type ArgumentMessage<MessageType> = MaximumArgumentMessage<MessageType>;
    export type Argument<MessageType> = MaximumArgument<MessageType>;
}
export default Maximum;
