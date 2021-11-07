import MinimumParameter, { MinimumArgument } from "./minimum-parameter";
import MinimumParameters from "./minimum-parameters";
declare namespace Minimum {
    const Parameter: typeof MinimumParameter;
    const Parameters: typeof MinimumParameters;
    type Argument = MinimumArgument;
}
export default Minimum;
