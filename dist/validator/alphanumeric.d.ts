import AlphanumericParameter from "./alphanumeric-parameter";
import AlphanumericParameters from "./alphanumeric-parameters";
import AlphanumericVoid from "./alphanumeric-void";
declare namespace Alphanumeric {
    const Parameter: typeof AlphanumericParameter;
    const Parameters: typeof AlphanumericParameters;
    const Void: typeof AlphanumericVoid;
}
export default Alphanumeric;
