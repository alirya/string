import Value from "@dikac/t-value/value";
import StringParameters from "./string-parameters";

export type StringArgument =
    Value<unknown> &
    {subject ?: string} &
    {conversion ?: (value:unknown)=>string}

export default function StringParameter({
    value,
    subject,
    conversion
} : StringArgument) : Error {

    return StringParameters(value, subject, conversion);
}



