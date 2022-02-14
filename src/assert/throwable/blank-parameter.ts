import Value from '@alirya/value/value';
import BlankParameters from './blank-parameters';

export type BlankParameterArgument = Value<string> & {subject ?: string};

export default function BlankParameter({
    value,
    subject = 'string'
} : BlankParameterArgument) : Error {

    return BlankParameters(value, subject);
}




