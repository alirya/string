import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable from "../validatable/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Count from "../number/count";
import StrictOmit from "@dikac/t-object/strict-omit";
import MinimumString from "../assert/string/minimum";



export function MinimumParameter(
    minimum : number,
    inclusive : boolean,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, string>>;

export function MinimumParameter<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>>;

export function MinimumParameter<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
    converter : (value:string)=>number,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>>;

export function MinimumParameter<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>(MessageType|string) = MinimumString.Object,
    converter : (value:string)=>number = Count,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>> {

    return function (value) {

        return new MinimumValidatable.Parameter(value, minimum, inclusive, message, converter)

    } as Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>>
}


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
