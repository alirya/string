import Value from "@dikac/t-value/value";
import Pattern from "../pattern/pattern/pattern";
import MatchParameters from "./match-parameters";

export type MatchArgument = Pattern & {

    error ?: (argument:Value<string> & Pattern)=>Error
};

export default function MatchParameter(
    value : string,
    // pattern : RegExp,
    // error : (value:string, pattern:RegExp)=>Error = MatchError,
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



