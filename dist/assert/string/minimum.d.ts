import String from "../../string/string";
import Validatable from "@dikac/t-validatable/validatable";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default function Minimum({ valid, string, minimum, inclusive, subject, }: Validatable & String & MinimumNumber & Inclusive & {
    subject?: string;
}): string;
