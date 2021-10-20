import ValueOf from "@dikac/t-value/value-of/value-of";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * @deprecated
 * string implementation of {@see Sentences}
 */
export default class Sentence implements ValueOf<string>, Validatable {
    valid: boolean;
    subject: string;
    expect: string;
    actual: string;
    accept: string;
    reject: string;
    accepts: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[];
    rejects: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[];
    comma: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[];
    /**
     * @see Sentences
     */
    constructor(valid: boolean, subject?: string, expect?: string, actual?: string, accept?: string, reject?: string, accepts?: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[], rejects?: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[], comma?: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[]);
    valueOf(): string;
    toString(): string;
    get message(): string;
}
