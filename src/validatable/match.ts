import {ValidatableParameters, ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import ValueMatch, {MatchType as ValueMatchType} from '../value/match.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';
import Pattern from '../pattern/pattern/pattern.js';
import Validatable from '@axiona/validator/value/validatable.js';

export interface MatchType<ValueType extends string, MessageType> extends ValueMatchType<ValueType> {

    readonly message : MessageType;
}

export class MatchParameters<ValueType extends string, MessageType> extends ValueMatch<ValueType> implements MatchType<ValueType, MessageType> {

    #message : ValidatableParameters<ValueType, MessageType, [RegExp]>;

    constructor(
        value : ValueType,
        pattern : RegExp,
        message : ValidatableParameters<ValueType, MessageType, [RegExp]>
    ) {
        super(value, pattern);

        this.#message = message;

    }

    get message() : MessageType {

        return this.#message(this.value, this.valid, this.pattern);
    }
}


export type MatchArgument<ValueType extends string, MessageType> =
    Message<
        ValidatableParameter<ValueType, MessageType, Validatable<ValueType> & Pattern>
    > & Value<ValueType> & Pattern;

export class MatchParameter<ValueType extends string, MessageType> extends ValueMatch<ValueType> implements MatchType<ValueType, MessageType> {

    #message : ValidatableParameter<ValueType, MessageType, Validatable<ValueType> & Pattern>;

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


namespace Match {
    export const Parameters = MatchParameters;
    export const Parameter = MatchParameter;
    export type Type<ValueType extends string, MessageType> = MatchType<ValueType, MessageType>;
    export type Argument<ValueType extends string, MessageType> = MatchArgument<ValueType, MessageType>;
}
export default Match;
