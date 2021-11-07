import NotBlankParameters from "./not-blank-parameters";
import NotBlankParameter, {NotBlankArgument} from "./not-blank-parameter";


namespace NotBlank {

    export const Parameter = NotBlankParameters;
    export const Object = NotBlankParameter;
    export type Argument<ValueType extends string, MessageType> = NotBlankArgument<ValueType, MessageType>;
}

export default NotBlank;

