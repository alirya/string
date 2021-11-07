import NotEmptyParameter, { NotEmptyArgument } from "./not-empty-parameter";
import NotEmptyParameters from "./not-empty-parameters";
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Parameters: typeof NotEmptyParameters;
    type Argument<ValueType extends string, MessageType> = NotEmptyArgument<ValueType, MessageType>;
}
export default NotEmpty;
