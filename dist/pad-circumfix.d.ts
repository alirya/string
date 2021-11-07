import PadCircumfixParameters from "./pad-circumfix-parameters";
import PadCircumfixParameter, { PadCircumfixArgument } from "./pad-circumfix-parameter";
declare namespace PadCircumfix {
    const Parameter: typeof PadCircumfixParameter;
    const Parameters: typeof PadCircumfixParameters;
    type Argument = PadCircumfixArgument;
}
export default PadCircumfix;
