/**
 * convert anything to string by using toString() method, or empty string for
 * null, undefined
 *
 * @param string
 */
export default function SafeCast(string : any) : string {

    switch (string) {
        case null :
        case undefined :
            return '';
        default :
            return string.toString();
    }
}
