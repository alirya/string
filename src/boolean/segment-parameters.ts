import Difference from "@dikac/t-array/difference-parameters";

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

export default function SegmentParameters(
    root : string,
    compare : string,
    separator : string
) : boolean {

    if(root === compare) {

        return true;
    }

    return Difference(
        root.split(separator),
        compare.split(separator),
    ).length === 0;
}

