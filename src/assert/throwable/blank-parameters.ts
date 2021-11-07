import BlankType from "../string/blank";


export default function BlankParameters(
    value : string,
    subject ?: string
) : Error {

    return new Error(BlankType.Parameters(false, value, subject))

}

