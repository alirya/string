import Validatable from '@alirya/validatable/validatable';
import String from '../../string/string';
import Inclusive from '@alirya/number/inclusive/inclusive';
import MaximumNumber from '@alirya/number/maximum/maximum';
import MaximumParameters from './maximum-parameters';

export type MaximumArgument = Validatable & String & MaximumNumber & Inclusive & {
    subject ?: string,
    converter ?: (value:string)=>number,
    criteria ?: string,
};

export default function MaximumParameter({
    valid,
    value,
    maximum,
    inclusive,
    converter,
    criteria,
    subject,
} : MaximumArgument) : string {

    return MaximumParameters(value, valid, maximum, inclusive, converter, criteria, subject);
}

