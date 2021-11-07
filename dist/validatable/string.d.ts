import StringParameters from "./string-parameters";
import StringParameter, { StringArgument } from "./string-parameter";
declare namespace String {
    const Parameters: typeof StringParameters;
    const Parameter: typeof StringParameter;
    type Argument<ValueType, MessageType> = StringArgument<ValueType, MessageType>;
}
export default String;
