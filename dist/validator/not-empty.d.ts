import NotEmptyParameter from "./not-empty-parameter";
import NotEmptyParameters from "./not-empty-parameters";
import NotEmptyVoid from "./not-empty-void";
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Parameters: typeof NotEmptyParameters;
    const Void: typeof NotEmptyVoid;
}
export default NotEmpty;
