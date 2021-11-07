import Value from "@dikac/t-value/value";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export declare type MaximumArgument = MaximumNumber & Inclusive & {
    converter?: (value: string) => number;
    error?: (argument: Value<string> & MaximumNumber & Inclusive) => Error;
};
export default function MaximumParameter(value: any, { maximum, inclusive, converter, error }: MaximumArgument): asserts value is string;
