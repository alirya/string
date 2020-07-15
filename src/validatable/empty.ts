import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validatable/message/readonly-merge";
import MessageCallback from "@dikac/t-validatable/message/callback";
import EmptyFromObject from "../boolean/empty-from-object";

export default class Empty<Msg>
    extends MergeWrapper<Value<string>, Message<Msg>, Validatable>

{
    readonly empty : boolean;

    constructor(
        number : string,
        empty : boolean,
        message : Function<[Readonly<Value<string> & Validatable>], Msg>,
    ) {

        let container : Value<string> & {empty : boolean} = {
            empty : empty,
            value : number,
        };

        let msg = MessageCallback(container, EmptyFromObject, ()=>message(this));

        super(container, msg, msg);

        this.empty = empty;
    }
}
