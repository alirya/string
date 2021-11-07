import MaximumParameter, { MaximumArgument } from "./maximum-parameter";
import MaximumParameters from "./maximum-parameters";
declare namespace Maximum {
    const Parameter: typeof MaximumParameter;
    const Parameters: typeof MaximumParameters;
    type Argument = MaximumArgument;
}
export default Maximum;
