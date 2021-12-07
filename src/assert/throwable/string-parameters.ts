import StringType from "../string/string-parameters";

export default function StringParameter(
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new TypeError(StringType(value, false, subject, conversion))
}

