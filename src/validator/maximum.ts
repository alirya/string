import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Function from "@dikac/t-function/function";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Size from "../number/size";
import Return from "@dikac/t-validator/return/return";
import MinimumValidatable from "../validatable/minimum";

export default class Maximum<MessageT>
    implements
        Validator<string, string, MaximumValidatable<MessageT>>,
        Message<Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], MessageT>>,
        MaximumNumber,
        Inclusive
{
    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], MessageT>,
        public converter : Function<[string], number> = Size,
    ) {
    }

    validate<Argument extends string>(
        value: Argument
    ) : Return<string, Argument, string, MaximumValidatable<MessageT>> {

        return <Return<string, Argument, string, MaximumValidatable<MessageT>>>
            new MaximumValidatable(value, this.maximum, this.inclusive, this.message, this.converter);
    }
}
