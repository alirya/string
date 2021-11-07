import StringType from "../string/string";

export default function StringParameter(
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new TypeError(StringType.Parameters(value, false, subject, conversion))
}

