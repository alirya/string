import Value from "@alirya/value/value";
import EmptyParameters from "./empty-parameters";

export type EmptyArgument = Value<string> & { subject?: string };

export default function EmptyObject({
    value,
    subject
} : EmptyArgument) : Error {

    return EmptyParameters(value, subject);
}
