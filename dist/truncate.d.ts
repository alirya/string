import TruncateParameters from "./truncate-parameters";
import TruncateParameter, { TruncateArgument } from "./truncate-parameter";
declare namespace Truncate {
    const Parameters: typeof TruncateParameters;
    const Parameter: typeof TruncateParameter;
    type Argument = TruncateArgument;
}
export default Truncate;
