import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MinimumValidatable from "../validatable/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Count from "../number/count";
import Return from "@dikac/t-validator/validatable/simple";

export default function Minimum<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>)=>MessageType,
    converter : (value:string)=>number = Count,
) : Validator<string, string, boolean, boolean, MinimumValidatable<string, MessageType>> {

    return function (value) {

        return new MinimumValidatable(value, minimum, inclusive, message, converter)

    } as Validator<string, string, boolean, boolean, MinimumValidatable<string, MessageType>>
}
