import Value from "@dikac/t-value/value";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
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
