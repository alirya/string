import EncloseParameter, { EncloseArgumentCircumfix, EncloseArgumentPair } from "./enclose-parameter";
import EncloseParameters from "./enclose-parameters";
declare namespace Enclose {
    const Parameter: typeof EncloseParameter;
    const Parameters: typeof EncloseParameters;
    type ArgumentPair = EncloseArgumentPair;
    type ArgumentCircumfix = EncloseArgumentCircumfix;
}
export default Enclose;
