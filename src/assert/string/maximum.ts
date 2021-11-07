import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import MaximumParameter, {MaximumArgument} from "./maximum-parameter";
import MaximumParameters from "./maximum-parameters";

namespace Maximum {

    export const Parameter = MaximumParameter;
    export const Parameters = MaximumParameters;
    export type Argument = MaximumArgument;
}
export default Maximum;
