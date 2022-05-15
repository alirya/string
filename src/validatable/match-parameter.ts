import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import Pattern from '../pattern/pattern/pattern';
import Match from '../value/match';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import Validatable from '@alirya/validator/value/validatable';

export type MatchArgument<ValueType, MessageType> =
    Message<
        Dynamic<ValueType, MessageType, Validatable<ValueType> & Pattern>
    > & Value<ValueType> & Pattern;

export default class MatchParameter<ValueType extends string, MessageType> extends Match<ValueType> {

    #message : Dynamic<ValueType, MessageType, Validatable<ValueType> & Pattern>;

    constructor(
        {
            value,
            pattern,
            message,
        } : MatchArgument<ValueType, MessageType>) {

        super(value, pattern);

        this.#message = message;
    }

    get message() : MessageType {

        return this.#message(this);
    }
}
