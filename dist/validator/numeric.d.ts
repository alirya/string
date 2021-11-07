import NumericParameter from "./numeric-parameter";
import NumericParameters from "./numeric-parameters";
import NumericVoid from "./numeric-void";
declare namespace Numeric {
    const Parameter: typeof NumericParameter;
    const Parameters: typeof NumericParameters;
    const Void: typeof NumericVoid;
}
export default Numeric;
