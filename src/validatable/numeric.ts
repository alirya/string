import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import NumericFromObject from "../boolean/numeric";

export default class Numeric<ValueT extends string, MessageT>
    implements
        Readonly<Value<ValueT> & Message<MessageT> & Validatable>

{
    readonly valid : boolean;

    constructor(
        readonly value : ValueT,
        private _message : Function<[Readonly<Value<ValueT> & Validatable>], MessageT>,
    ) {

        this.valid = NumericFromObject(value);
    }

    toString() : string {

        return this.value;
    }

    get message() : MessageT {

        return this._message(this);
    }
}
