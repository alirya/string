import Dynamic from '@alirya/validator/message/function/validatable-parameters';
import Match from '../value/match';

export default class MatchParameter<ValueType extends string, MessageType> extends Match<ValueType> {

    #message : Dynamic<ValueType, MessageType, [RegExp]>;

    constructor(
        value : ValueType,
        pattern : RegExp,
        message : Dynamic<ValueType, MessageType, [RegExp]>
    ) {
        super(value, pattern);

        this.#message = message;

    }

    get message() : MessageType {

        return this.#message(this.value, this.valid, this.pattern);
    }
}
