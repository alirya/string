/**
 * check if {@param compare} is part of {@param root}
 *
 * @param root
 * @param compare
 *
 * @param delimiter
 * separator each segment
 *
 * @example
 * // return true
 * Segment('root', 'root.parent', '.')
 *
 * @example
 * // return true
 * Segment('root', 'root', '.')
 *
 * @example
 * // return false
 * Segment('root.parent', 'root', '.')
 */
export default function Segment(root: string, compare: string, delimiter: string): boolean;
