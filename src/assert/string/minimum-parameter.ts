import String from '../../string/string';
import Validatable from '@alirya/validatable/validatable';
import MinimumNumber from '@alirya/number/minimum/minimum';
import Inclusive from '@alirya/number/inclusive/inclusive';
import MinimumParameters from './minimum-parameters';

export type MinimumArgument = Validatable & String & MinimumNumber & Inclusive & {
    converter ?: (value:string)=>number,
    criteria ?: string,
    subject ?: string
};

export default function MinimumParameter(
    {
        string,
        valid,
        minimum,
        inclusive,
        subject,
        converter,
        criteria,
} : MinimumArgument) : string {

    return MinimumParameters(string, valid, minimum, inclusive, converter, criteria, subject);
}

