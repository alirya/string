import TrimParameters from "./trim-parameters";
import TrimParameter, { TrimParameterArgumentCircumfix, TrimParameterArgumentPair } from "./trim-parameter";
declare namespace Trim {
    const Parameters: typeof TrimParameters;
    const Parameter: typeof TrimParameter;
    type ArgumentCircumfix = TrimParameterArgumentCircumfix;
    type ArgumentPair = TrimParameterArgumentPair;
}
export default Trim;
