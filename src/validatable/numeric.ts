import NumericParameter from "./numeric-parameter";
import {NumericArgument} from "./numeric-parameter";
import NumericParameters from "./numeric-parameters";

namespace Numeric {

    export const Parameter = NumericParameter;
    export const Parameters = NumericParameters;
    export type Argument<ValueType extends string, MessageType> = NumericArgument<ValueType, MessageType>;
}
export default Numeric;

