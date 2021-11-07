import DigitParameter, { DigitArgument } from "./digit-parameter";
import DigitParameters from "./digit-parameters";
declare namespace Digit {
    const Parameter: typeof DigitParameter;
    const Parameters: typeof DigitParameters;
    type Argument = DigitArgument;
}
export default Digit;
