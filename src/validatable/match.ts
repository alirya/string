import {ValidatableParameters, ValidatableParameter} from '@alirya/validator/message/function/validatable';
import ValueMatch, {MatchType as ValueMatchType} from '../value/match';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import Pattern from '../pattern/pattern/pattern';
import Validatable from '@alirya/validator/value/validatable';

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
