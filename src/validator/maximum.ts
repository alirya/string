import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable,{Return} from "../validatable/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Count from "../number/count";
import MaximumString from "../validatable/string/maximum";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import StrictOmit from "@dikac/t-object/strict-omit";


export type Argument<MessageType> =
    MaximumNumber &
    Inclusive &
    Validatable &
    {converter ?: (value:string)=>number} &
    Message<(result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageType>

export default function Maximum(
    {
        maximum,
        inclusive,
        converter,
    } : StrictOmit<Argument<unknown>, 'message'>
) : Validator<string, string, boolean, boolean, Return<string, string>>;

export default function Maximum<MessageType>(
    {
        maximum,
        inclusive,
        message,
        converter,
    } : Argument<MessageType|string>
) : Validator<string, string, boolean, boolean, Return<string, MessageType>>;

export default function Maximum<MessageType>(
    {
        maximum,
        inclusive,
        message = MaximumString,
        converter = Count,
    } : Argument<MessageType|string>
) : Validator<string, string, boolean, boolean, Return<string, MessageType>> {

    return function (value) {

        return MaximumValidatable({value, maximum, inclusive, message, converter})

    } as Validator<string, string, boolean, boolean, Return<string, MessageType>>
}
