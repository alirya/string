import Value from "@alirya/value/value";
import Pattern from "../pattern/pattern/pattern";
import MatchParameters from "./match-parameters";

export type MatchArgument = Pattern & {

    error ?: (argument:Value<string> & Pattern)=>Error
};

export default function MatchParameter(
    value : string,
    {
        pattern,
        error,
    } : MatchArgument
) : asserts value is string {

    MatchParameters(
        value,
        pattern,
        error ? (value, pattern) => error({value, pattern}) : error
    );
}



