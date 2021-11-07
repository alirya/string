import Separator from "../separator/separator";
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
export default function SegmentParameter({ root, compare, separator }: Separator & {
    root: string;
    compare: string;
}): boolean;
