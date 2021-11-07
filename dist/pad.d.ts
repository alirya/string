import PadParameter, { PadArgumentCircumfix, PadArgumentPair } from "./pad-parameter";
import PadParameters from "./pad-parameters";
declare namespace Pad {
    const Parameter: typeof PadParameter;
    const Parameters: typeof PadParameters;
    type ArgumentCircumfix = PadArgumentCircumfix;
    type ArgumentPair = PadArgumentPair;
}
export default Pad;
