import StringParameter, { StringArgument } from "./string-parameter";
import StringParameters from "./string-parameters";
declare namespace String {
    const Parameter: typeof StringParameter;
    const Parameters: typeof StringParameters;
    type Argument = StringArgument;
}
export default String;
