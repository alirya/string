/**
 * check if {@param string} length is zero
 *
 * @param string
 */
export default function Empty(
    string : string,
) : boolean {

    return string === '';
}

export {Empty as IsEmpty};
export {Empty as IsEmptyString};