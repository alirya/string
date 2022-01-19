import {MaximumArgument} from "../string/maximum-parameter";
import MaximumParameters from "./maximum-parameters";

export {MaximumArgument};

export default function MaximumParameter({
    string,
    maximum,
    inclusive,
    subject,
    criteria,
    converter
} : MaximumArgument) : Error {

    return MaximumParameters(string, maximum, inclusive, converter, criteria, subject)
}


