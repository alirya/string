import DigitParameter from "./digit-parameter";
import DigitParameters from "./digit-parameters";
import DigitVoid from "./digit-void";
declare namespace Digit {
    const Parameter: typeof DigitParameter;
    const Parameters: typeof DigitParameters;
    const Void: typeof DigitVoid;
}
export default Digit;
