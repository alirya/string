import Value from '@alirya/value/value';
import AlphabetParameters from './alphabet-parameters';

export type AlphabetArgument = Value<string> & {subject ?: string};

export default function AlphabetObject({
    value,
    subject
} : AlphabetArgument) : Error {

    return AlphabetParameters(value, subject);
}

