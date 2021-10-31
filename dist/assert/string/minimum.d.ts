import String from "../../string/string";
import Validatable from "@dikac/t-validatable/validatable";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default Minimum;
declare namespace Minimum {
    const Parameter: typeof MinimumParameter;
    const Object: typeof MinimumObject;
    type Argument = MinimumArgument;
}
export declare function MinimumParameter(value: string, valid: boolean, minimum: number, inclusive: boolean, subject?: string): string;
export declare type MinimumArgument = Validatable & String & MinimumNumber & Inclusive & {
    subject?: string;
};
export declare function MinimumObject({ value, valid, minimum, inclusive, subject, }: MinimumArgument): string;
