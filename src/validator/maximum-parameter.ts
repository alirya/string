import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable, {MaximumType} from "../validatable/maximum-parameters";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import StrictOmit from "@dikac/t-object/strict-omit";
import MaximumParameters from "./maximum-parameters";
import {Object} from "ts-toolbelt";


export type MaximumParameterArgument<MessageType> =
    MaximumNumber &
    Inclusive &
    Validatable &
    {converter ?: (value:string)=>number} &
    Partial<Message<(result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageType>>

export default function MaximumParameter(
    {
        maximum,
        inclusive,
    } : StrictOmit<MaximumParameterArgument<unknown>, 'message'|'converter'>
) : Validator<string, string, boolean, boolean, MaximumType<string, string>>;

export default function MaximumParameter(
    {
        maximum,
        inclusive,
        converter,
    } : Object.Required<MaximumParameterArgument<unknown>, 'converter'>
) : Validator<string, string, boolean, boolean, MaximumType<string, string>>;

export default function MaximumParameter<MessageType> (
    {
        maximum,
        inclusive,
        message,
    } : Object.Required<MaximumParameterArgument<unknown>, 'message'>
) : Validator<string, string, boolean, boolean, MaximumType<string, MessageType>>;

export default function MaximumParameter<MessageType>(
    {
        maximum,
        inclusive,
        message,
        converter,
    } : MaximumParameterArgument<MessageType|string>
) : Validator<string, string, boolean, boolean, MaximumType<string, MessageType>>;

export default function MaximumParameter<MessageType>(
    {
        maximum,
        inclusive,
        message,
        converter,
    } : MaximumParameterArgument<MessageType>
) : Validator<string, string, boolean, boolean, MaximumType<string, MessageType|string>> {

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
