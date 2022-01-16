import Value from "@alirya/value/value";
import Pattern from "../../pattern/pattern/pattern";
import MatchParameters from "./match-parameters";

export type MatchArgument = Value<string> & Pattern & {subject ?: string};

export default function MatchParameter({
    value,
    pattern,
    subject = 'string',
} : MatchArgument) : Error {

    return MatchParameters(value, pattern, subject)
}

