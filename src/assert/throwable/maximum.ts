import MaximumType from "../string/maximum";
import Value from "@dikac/t-value/value";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumParameter, {MaximumArgument} from "./maximum-parameter";
import MaximumParameters from "./maximum-parameters";

namespace Maximum {

    export const Parameter = MaximumParameter;
    export const Parameters = MaximumParameters;
    export type Argument = MaximumArgument;
}

export default Maximum;
