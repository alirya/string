/**
 * match string {@param string} against {@param pattern}
 *
 * @param string
 * @param pattern
 */
export default function Match(string : string, pattern : RegExp) : boolean {

    return string.match(pattern) !== null;
}
