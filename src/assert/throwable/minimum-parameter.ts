import MinimumParameters from "./minimum-parameters";
import {MinimumArgument} from "../string/minimum-parameter";

export {MinimumArgument};

export default function MinimumParameter({
    value,
    minimum,
    inclusive,
    converter,
    criteria,
    subject,
} : MinimumArgument) : Error {

    return MinimumParameters(value, minimum, inclusive, converter, criteria, subject)
}
