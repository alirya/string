import BlankType from '../string/blank-parameters';


export default function BlankParameters(
    value : string,
    subject ?: string
) : Error {

    return new Error(BlankType(false, value, subject));

}

