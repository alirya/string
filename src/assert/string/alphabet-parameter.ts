import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import AlphabetParameters from './alphabet-parameters';

export type AlphabetArgument = Validatable & Value<string> & {subject ?: string };


export default function AlphabetParameter({
    valid,
    value,
    subject
} : AlphabetArgument) : string {

    return AlphabetParameters(value, valid, subject);
}
