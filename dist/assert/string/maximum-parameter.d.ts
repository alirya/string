import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
export declare type MaximumArgument = Validatable & String & MaximumNumber & Inclusive & {
    subject?: string;
    converter?: (value: string) => number;
    criteria?: string;
};
export default function MaximumParameter({ valid, value, maximum, inclusive, converter, criteria, subject, }: MaximumArgument): string;
