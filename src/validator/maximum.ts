import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Count from "../number/count";
import Return from "@dikac/t-validator/validatable/simple";

export default function Maximum<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : (result:Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>)=>MessageType,
    converter : (value:string)=>number = Count,
) : Validator<string, string, boolean, boolean, MaximumValidatable<string, MessageType>> {

    return function (value) {

        return new MaximumValidatable(value, maximum, inclusive, message, converter)

    } as Validator<string, string, boolean, boolean, MaximumValidatable<string, MessageType>>
}
