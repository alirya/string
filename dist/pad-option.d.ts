import PadOptionParameter, { PadOptionArgument } from "./pad-option-parameter";
import PadOptionParameters from "./pad-option-parameters";
declare namespace PadOption {
    const Parameter: typeof PadOptionParameter;
    const Parameters: typeof PadOptionParameters;
    type Argument = PadOptionArgument;
}
export default PadOption;
