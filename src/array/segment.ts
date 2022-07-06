import String from '../string/string.js';
import Separator from '../separator/separator.js';

/**
 * split {@param string} to its each alphanumeric marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Alphanumeric('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */

export function SegmentParameters(
    string : string,
    separator : string
) : string[] {

    const list = string.split(separator);
    const length = list.length;

    let adds : string[] = [];

    for (let i = 1; i <= length; i++) {

        adds.push(list.slice(0, i).join(separator));
    }

    return adds;
}

export type AlphanumericArgument = String & Separator;

/**
 * split {@param string} to its each alphanumeric marked by {@param separator}
 *
 * @param string
 * @param separator
 *
 * example
 *     Alphanumeric('root.parent.child', '.') => ['root', 'root.parent', 'root.parent.child']
 */
export function SegmentParameter({
    string,
    separator
} : AlphanumericArgument) : string[] {

    return SegmentParameters(string, separator);
}



namespace Segment {
    export const Parameters = SegmentParameters;
    export const Parameter = SegmentParameter;
    export type Argument = AlphanumericArgument;
}
export default Segment;
