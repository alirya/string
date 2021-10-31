import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
export default Maximum;
declare namespace Maximum {
    const Parameter: typeof MaximumParameter;
    const Object: typeof MaximumObject;
    type Argument = MaximumArgument;
}
export declare function MaximumParameter(value: string, valid: boolean, maximum: number, inclusive: boolean, subject?: string): string;
export declare type MaximumArgument = Validatable & String & MaximumNumber & Inclusive & {
    subject?: string;
};
export declare function MaximumObject({ valid, value, maximum, inclusive, subject, }: MaximumArgument): string;
