import MaximumParameter, { MaximumArgument, MaximumType } from "./maximum-parameter";
import MaximumParameters from "./maximum-parameters";
declare namespace Maximum {
    const Parameter: typeof MaximumParameter;
    const Parameters: typeof MaximumParameters;
    type Argument<ValueType extends string, MessageType> = MaximumArgument<ValueType, MessageType>;
    type Type<ValueType, MessageType> = MaximumType<ValueType, MessageType>;
}
export default Maximum;
