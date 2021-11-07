import MinimumParameter, { MinimumArgument } from "./minimum-parameter";
import MinimumParameters, { MinimumType } from "./minimum-parameters";
declare namespace Minimum {
    const Parameter: typeof MinimumParameter;
    const Parameters: typeof MinimumParameters;
    type Argument<ValueType extends string, MessageType> = MinimumArgument<ValueType, MessageType>;
    type Type<ValueType, MessageType> = MinimumType<ValueType, MessageType>;
}
export default Minimum;
