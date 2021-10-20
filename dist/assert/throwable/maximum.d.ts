import Value from "@dikac/t-value/value";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default function Maximum({ value, maximum, inclusive, subject, }: Value<string> & MaximumNumber & Inclusive & {
    subject: string;
}): Error;
