import StringParameter from "./string-parameter";
import StringParameters from "./string-parameters";
import StringVoid from "./string-void";
declare namespace String {
    const Parameter: typeof StringParameter;
    const Parameters: typeof StringParameters;
    const Void: typeof StringVoid;
}
export default String;
