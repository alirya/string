import Validatable from "@dikac/t-validatable/validatable";
import String from "../../string/string";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
export default function Maximum({ valid, string, maximum, inclusive, subject, }: Validatable & String & MaximumNumber & Inclusive & {
    subject?: string;
}): string;
