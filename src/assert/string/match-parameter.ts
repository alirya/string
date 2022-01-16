import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import Pattern from "../../pattern/pattern/pattern";
import MatchParameters from "./match-parameters";

export type MatchArgument = Validatable & Value<string> & Pattern & {subject ?: string};

export default function MatchParameter({
    valid,
    value,
    pattern,
    subject,
} : MatchArgument) : string {

    return MatchParameters(value, valid, pattern, subject);
}

