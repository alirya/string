import TrimParameters from "./trim-parameters";
import TrimParameter, {TrimParameterArgumentCircumfix, TrimParameterArgumentPair} from "./trim-parameter";

namespace Trim {

    export const Parameters = TrimParameters;
    export const Parameter = TrimParameter;
    export type ArgumentCircumfix = TrimParameterArgumentCircumfix;
    export type ArgumentPair = TrimParameterArgumentPair;
}

export default Trim;
