/**
 * check if {@param string} length not zero
 *
 * @param string
 */
export default function NotEmpty(
    string : string,
) : boolean {

    return string !== '';
}

export {NotEmpty as IsNotEmpty};
export {NotEmpty as IsNotEmptyString};
