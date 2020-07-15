import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import StringValidatable from "../validatable/string";
import Function from "@dikac/t-function/function";

export type Return<Msg> =
    Readonly<Validatable<true> & Message<Msg> & Value<string>> |
    Readonly<Validatable<false> & Message<Msg> & Value<unknown>>;

export default class String<Msg>
    implements
        Validator<string, Return<Msg>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: unknown): Return<Msg> {

        return StringValidatable(value, this.message);
    }
}
