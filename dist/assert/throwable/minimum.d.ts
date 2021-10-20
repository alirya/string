import Value from "@dikac/t-value/value";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default function Minimum({ value, minimum, inclusive, subject, }: Value<string> & MinimumNumber & Inclusive & {
    subject?: string;
}): Error;
