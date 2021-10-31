import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Digit;
declare namespace Digit {
    const Parameter: typeof DigitParameter;
    const Object: typeof DigitObject;
    type Argument = DigitArgument;
}
export declare function DigitParameter(valid: boolean, value: string, subject?: string): string;
export declare type DigitArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function DigitObject({ valid, value, subject }: DigitArgument): string;
