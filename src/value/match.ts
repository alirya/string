import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import ValueOf from "@alirya/value/value-of/value-of";

export default class Match<ValueType extends string>
    implements
        Readonly<Value<ValueType>>,
        Readonly<Validatable>,
        Readonly<ValueOf<string>>

{
    readonly valid : boolean;
    readonly match : string[];

    constructor(
        readonly value : ValueType,
        readonly pattern : RegExp,
    ) {

        let match = value.match(pattern);
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
