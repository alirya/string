import BlankParameter, { BlankArgument } from "./blank-parameter";
import BlankParameters from "./blank-parameters";
declare namespace Blank {
    const Parameter: typeof BlankParameter;
    const Parameters: typeof BlankParameters;
    type Argument<ValueType extends string, MessageType> = BlankArgument<ValueType, MessageType>;
}
export default Blank;
