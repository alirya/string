import MinimumParameters from './minimum-parameters';
import {MinimumArgument} from '../string/minimum-parameter';

export {MinimumArgument};

export default function MinimumParameter({
    string,
    minimum,
    inclusive,
    converter,
    criteria,
    subject,
} : MinimumArgument) : Error {

    return MinimumParameters(string, minimum, inclusive, converter, criteria, subject);
}
