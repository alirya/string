import StringType from "../string/string";
import Value from "@dikac/t-value/value";

export default function String({
    value,
    subject = 'type',
    conversion = value=>typeof value
} : Value<unknown> & {subject: string} & {conversion : (value:unknown)=>string}) : Error {

    return new TypeError(StringType(false, value, subject, conversion))
}
