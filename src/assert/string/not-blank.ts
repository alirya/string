import NotBlankParameter from "./not-blank-parameter";
import NotBlankParameters from "./not-blank-parameters";
import {NotEmptyArgument} from "./not-empty-parameter";


namespace NotBlank {

    export const Parameter = NotBlankParameter;
    export const Parameters = NotBlankParameters;
    export type Argument = NotEmptyArgument;
}
export default NotBlank;
