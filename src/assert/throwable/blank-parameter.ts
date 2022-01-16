import Value from '@alirya/value/value';
import BlankParameters from './blank-parameters';

export type BlankArgument = Value<string> & {subject ?: string};

export default function BlankParameter({
    value,
    subject = 'string'
} : Value<string> & {subject ?: string}) : Error {

    return BlankParameters(value, subject);
}




