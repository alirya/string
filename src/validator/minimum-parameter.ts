import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable, {MinimumType} from "../validatable/minimum-parameter";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import StrictOmit from "@dikac/t-object/strict-omit";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";

export type Argument<MessageType> =
    MinimumNumber &
    Inclusive &
    Validatable &
    {converter ?: (value:string)=>number} &
    Message<(result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType> &
    Dynamic<string, MessageType>


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

        return MinimumValidatable({value, minimum, inclusive, message, converter})

    } as Validator<string, string, boolean, boolean, MinimumType<string, MessageType>>
}
