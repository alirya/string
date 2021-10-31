import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Numeric;
declare namespace Numeric {
    const Parameter: typeof NumericParameter;
    const Object: typeof NumericObject;
    type Argument = NumericArgument;
}
export declare function NumericParameter(value: string, valid: boolean, subject?: string): string;
export declare type NumericArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function NumericObject({ valid, value, subject }: NumericArgument): string;
