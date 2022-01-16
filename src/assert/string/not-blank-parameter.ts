import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import NotBlankParameters from './not-blank-parameters';

export type NotBlankArgument = Validatable & Value<string> & {subject ?: string};

export default function NotBlankParameter({
    valid,
    value,
    subject,
} : NotBlankArgument) : string {

    return NotBlankParameters(value, valid, subject);
}
