import {MaximumArgument} from '../string/maximum-parameter';
import MaximumParameters from './maximum-parameters';

export {MaximumArgument};

export default function MaximumParameter({
    value,
    maximum,
    inclusive,
    subject,
    criteria,
    converter
} : MaximumArgument) : Error {

    return MaximumParameters(value, maximum, inclusive, converter, criteria, subject);
}


