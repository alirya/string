import NotBlankParameters from "./not-blank-parameters";
import NotBlankParameter, { NotBlankArgument } from "./not-blank-parameter";
declare namespace NotBlank {
    const Parameter: typeof NotBlankParameters;
    const Object: typeof NotBlankParameter;
    type Argument<ValueType extends string, MessageType> = NotBlankArgument<ValueType, MessageType>;
}
export default NotBlank;
