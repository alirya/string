import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import BlankParameters from './blank-parameters';

export type BlankArgument = Validatable & Value<string> & {subject ?: string };

export default function BlankParameter({
    valid,
    value,
    subject = 'string',
} : BlankArgument) : string {

    return BlankParameters(valid, value, subject);
}
