import Empty from './empty.js';
/**
 * check if {@param string} is all white space (space, tab, no-break space, etc.) or empty string {@see Empty}
 *
 * @param string
 */

export default function Blank(
    string : string,
) : boolean {

    return Empty(string.trim());
}
