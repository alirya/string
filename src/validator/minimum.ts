import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable, {Return} from "../validatable/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Count from "../number/count";
import StrictOmit from "@dikac/t-object/strict-omit";
import MinimumString from "../validatable/string/minimum";

export type Argument<MessageType> =
    MinimumNumber &
    Inclusive &
    Validatable &
    {converter ?: (value:string)=>number} &
    Message<(result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType>


export default function Minimum(
    {
        minimum,
        inclusive,
        converter
    } : StrictOmit<Argument<any>, 'message'>
) : Validator<string, string, boolean, boolean, Return<string, string>>;

export default function Minimum<MessageType>(
    {
        minimum,
        inclusive,
        message,
        converter
    } : Argument<MessageType>
) : Validator<string, string, boolean, boolean, Return<string, MessageType>>;

export default function Minimum<MessageType>(
    {
        minimum,
        inclusive,
        message = MinimumString,
        converter = Count
    } : Argument<MessageType|string>
) : Validator<string, string, boolean, boolean, Return<string, MessageType>> {

    return function (value) {

        return MinimumValidatable({value, minimum, inclusive, message, converter})

    } as Validator<string, string, boolean, boolean, Return<string, MessageType>>
}
