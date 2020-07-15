import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import AlphanumericValidatable from "../validatable/alphanumeric";
import Function from "@dikac/t-function/function";

type Return<Msg> = Readonly<Validatable<boolean> & Message<Msg> & Value<string>>;

export default class Alphanumeric<Msg>
    implements
        Validator<string, Return<Msg>>,
        Message<Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value<string>> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: string): Return<Msg> {

        return new AlphanumericValidatable(value, this.message);
    }
}
