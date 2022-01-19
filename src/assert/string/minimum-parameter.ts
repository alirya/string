import String from "../../string/string";
import Validatable from "@dikac/t-validatable/validatable";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumParameters from "./minimum-parameters";

export type MinimumArgument = Validatable & String & MinimumNumber & Inclusive & {
    converter ?: (value:string)=>number,
    criteria ?: string,
    subject ?: string
};

export default function MinimumParameter(
    {
        string,
        valid,
        minimum,
        inclusive,
        subject,
        converter,
        criteria,
} : MinimumArgument) : string {

    return MinimumParameters(string, valid, minimum, inclusive, converter, criteria, subject);
}

