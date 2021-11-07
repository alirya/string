import NumericParameter from "./numeric-parameter";
import { NumericArgument } from "./numeric-parameter";
import NumericParameters from "./numeric-parameters";
declare namespace Numeric {
    const Parameter: typeof NumericParameter;
    const Parameters: typeof NumericParameters;
    type Argument<ValueType extends string, MessageType> = NumericArgument<ValueType, MessageType>;
}
export default Numeric;
