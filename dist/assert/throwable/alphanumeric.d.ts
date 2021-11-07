import AlphanumericParameter from "./alphanumeric-parameter";
import AlphanumericParameters from "./alphanumeric-parameters";
import { AlphanumericArgument } from "./alphanumeric-parameter";
declare namespace Alphanumeric {
    const Parameter: typeof AlphanumericParameter;
    const Parameters: typeof AlphanumericParameters;
    type Argument = AlphanumericArgument;
}
export default Alphanumeric;
