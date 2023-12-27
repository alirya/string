import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValueOf from '@axiona/value/value-of/value-of.js';

export interface MatchType<ValueType extends string> extends
    Readonly<Value<ValueType>>,
    Readonly<Validatable>,
    Readonly<ValueOf<string>> {
    readonly valid : boolean;
    readonly match : string[];
    readonly value : ValueType;
    readonly pattern : RegExp;
    toString() : string;
    valueOf() : string;
}

export default class Match<ValueType extends string> implements MatchType<ValueType>
{
    readonly valid : boolean;
    readonly match : string[];

    constructor(
        readonly value : ValueType,
        readonly pattern : RegExp,
    ) {

        const match = value.match(pattern);
        this.valid = match !== null;
        this.match = match ? match : [];
    }

    toString() : string {

        return this.value;
    }

    valueOf() : string {

        return this.value;
    }
}
