import SegmentParameter from "./segment-parameter";
import SegmentParameters from "./segment-parameters";
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
declare namespace Segment {
    const Parameter: typeof SegmentParameter;
    const Parameters: typeof SegmentParameters;
}
export default Segment;
