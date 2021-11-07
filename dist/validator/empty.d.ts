import EmptyParameter from "./empty-parameter";
import EmptyParameters from "./empty-parameters";
import EmptyVoid from "./empty-void";
declare namespace Empty {
    const Parameter: typeof EmptyParameter;
    const Parameters: typeof EmptyParameters;
    const Void: typeof EmptyVoid;
}
export default Empty;
