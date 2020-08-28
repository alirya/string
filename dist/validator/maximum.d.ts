import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Return from "@dikac/t-validator/validatable/simple";
export default class Maximum<MessageT> implements Validator<string, string, boolean, boolean, MaximumValidatable<string, MessageT>>, Message<(result: Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>) => MessageT>, MaximumNumber, Inclusive {
    maximum: number;
    inclusive: boolean;
    message: (result: Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>) => MessageT;
    converter: (value: string) => number;
    constructor(maximum: number, inclusive: boolean, message: (result: Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>) => MessageT, converter?: (value: string) => number);
    validate<Argument extends string>(value: Argument): Return<string, Argument, string, MaximumValidatable<Argument, MessageT>>;
}
