import Validator from '@alirya/validator/validator';
import MinimumValidatable, {MinimumReturnContext} from '../validatable/minimum';
import Count from '../number/count';
import MinimumString from '../assert/string/minimum';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import Inclusive from '@alirya/number/inclusive/inclusive';
import MinimumNumber from '@alirya/number/minimum/minimum';
import StrictOmit from '@alirya/object/strict-omit';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import {StringParameters} from "./string";
import SimpleValidator from "@alirya/validator/simple";

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
