import NumericParameter, { NumericArgument } from "./numeric-parameter";
import NumericParameters from "./numeric-parameters";
declare namespace Numeric {
    const Parameter: typeof NumericParameter;
    const Parameters: typeof NumericParameters;
    type Argument = NumericArgument;
}
export default Numeric;
