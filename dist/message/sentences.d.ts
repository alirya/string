import ValueOf from "@dikac/t-value/value-of/value-of";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * @deprecated
 * create a string message, by joining subject, (reject, or accept), expect, actual according
 * to order
 */
export default class Sentences implements ValueOf<string>, Validatable {
    valid: boolean;
    subject: string[];
    expect: string[];
    accept: string[];
    reject: string[];
    actual: string[];
    accepts: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[];
    rejects: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[];
    comma: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[];
    /**
     * @param valid
     * @param subject
     * intended for such as 'argument', 'type', 'object.property'
     *
     * @param reject
     * @default 'must'
     * used {@param subject} if {@param valid} false
     * intended for such as 'must', 'is not'
     *
     * @param accept
     * @default 'is'
     * used {@param subject} if {@param valid} true
     * intended for such as 'must', 'is not'
     *
     * @param expect
     * expectation of value
     * intended for such as 'array', 'string' ,'lower than', <literal value>
     *
     * @param actual
     * actual of message
     * intended for such as 'array', 'string' ,'lower than', <literal value>
     *
     * @param rejects
     * orders for invalid
     * @default ['subject', 'reject', 'accept', 'expect', 'actual']
     *
     * @param accepts
     * orders for valid
     * @default ['subject', 'reject', 'accept', 'expect']
     *
     * @param comma
     * place comma after parts
     */
    constructor(valid: boolean, subject?: string[], expect?: string[], accept?: string[], reject?: string[], actual?: string[], accepts?: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[], rejects?: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[], comma?: ('subject' | 'expect' | 'reject' | 'accept' | 'actual')[]);
    valueOf(): string;
    toString(): string;
    get message(): string;
}
