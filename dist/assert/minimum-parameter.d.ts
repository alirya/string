import Value from "@dikac/t-value/value";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export declare type MinimumArgument = MinimumNumber & Inclusive & {
    converter?: (value: string) => number;
    error?: (argument: Value<string> & MinimumNumber & Inclusive) => Error;
};
export default function MinimumParameter(value: any, { minimum, inclusive, converter, error }: MinimumArgument): asserts value is string;
