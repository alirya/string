import NotBlankParameter from "./not-blank-parameter";
import NotBlankParameters from "./not-blank-parameters";
import { NotEmptyArgument } from "./not-empty-parameter";
declare namespace NotBlank {
    const Parameter: typeof NotBlankParameter;
    const Parameters: typeof NotBlankParameters;
    type Argument = NotEmptyArgument;
}
export default NotBlank;
