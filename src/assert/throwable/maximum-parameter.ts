import MaximumType from "../string/maximum";
import Value from "@dikac/t-value/value";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import {MaximumArgument} from "../string/maximum-parameter";
import MaximumParameters from "./maximum-parameters";

export {MaximumArgument};

export default function MaximumParameter({
    value,
    maximum,
    inclusive,
    subject,
    criteria,
    converter
} : MaximumArgument) : Error {

    return MaximumParameters(value, maximum, inclusive, converter, criteria, subject)
}


