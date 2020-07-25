import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import AlphanumericFromObject from "../boolean/alphanumeric";

export default class Alphanumeric<Msg>
    implements
        Readonly<Value<string> & Message<Msg> & Validatable>

{
    readonly valid : boolean;

    constructor(
        readonly value : string,
        private _message : Function<[Readonly<Value<string> & Validatable>], Msg>,
    ) {

        this.valid = AlphanumericFromObject(value);

    }

    toString() : string {

        return this.value;
    }

    get message() : Msg {

        return this._message(this);
    }
}

