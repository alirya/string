import AlphanumericParameter, { AlphanumericArgument } from "./alphanumeric-parameter";
import AlphanumericParameters from "./alphanumeric-parameters";
declare namespace Alphanumeric {
    const Parameter: typeof AlphanumericParameter;
    const Parameters: typeof AlphanumericParameters;
    type Argument<ValueType extends string, MessageType> = AlphanumericArgument<ValueType, MessageType>;
}
export default Alphanumeric;
