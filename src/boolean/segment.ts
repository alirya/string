import { DifferenceParameters } from '@alirya/array/difference.js';
import Separator from '../separator/separator.js';

/**
 * check if {@param compare} is part of {@param root}
 *
 * @param root
 * @param compare
 *
 * @param separator
 * separator each segment
 *
 * @example
 * Segment('root', 'root.parent', '.') : true
 *
 * @example
 * Segment('root', 'root', '.') : true
 *
 * @example
 * Segment('root.parent', 'root', '.') : false
 */

export function SegmentParameters(
    root : string,
    compare : string,
    separator : string
) : boolean {

    if(root === compare) {

        return true;
    }

    return DifferenceParameters(
        root.split(separator),
        compare.split(separator),
    ).length === 0;
}



/**
 * check if {@param compare} is part of {@param root}
 *
 * @param root
 * @param compare
 *
 * @param separator
 * separator each segment
 *
 * @example
 * Segment('root', 'root.parent', '.') : true
 *
 * @example
 * Segment('root', 'root', '.') : true
 *
 * @example
 * Segment('root.parent', 'root', '.') : false
 */
export function SegmentParameter({
    root,
    compare,
    separator
} : Separator & {root:string, compare: string}) : boolean {

    return SegmentParameters(root, compare, separator);
}


namespace Segment {
    export const Parameters = SegmentParameters;
    export const Parameter = SegmentParameter;
}
export default Segment;
